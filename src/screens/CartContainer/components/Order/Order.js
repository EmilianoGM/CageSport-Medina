import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { getBatch, getProductosByCartArray, getNewOrderReference } from '../../../../services/CloudFirestoreService';
import { BuyerForm } from '../BuyerForm/BuyerForm';
import { Error } from '../../../ErrorContainer/Error';
import { Modal } from '../../../../components/Modal/Modal';
import {Button, CircularProgress} from '@material-ui/core';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import useStyles from './OrderStyle';

/**
 * Muestra un formulario de orden de compra al usuario.
 * @param {*} props totalPrice | addOrderId | itemsCompraArray | clearCart
 */
export const Order = props => {
    const classes = useStyles();
    const history = useHistory();
    const { addOrderId, orderId, itemsCompraArray, clearCart, getTotalPrice} = props;
    //Flags
    const [openOrderModal, setOpenOrderModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [orderFinished, setOrderFinished] = useState(false);
    const [orderError, setOrderError] = useState(false);
    //Data
    const [outOfStockArray, setOutOfStockArray] = useState([]);

    

    /**
     * Maneja la apertura de la ventana de dialogo;
     */
    const handleOpenOrder = () => {
        setOpenOrderModal(true);
    };

    /**
     * Maneja el cierre de la ventana de dialogo.
     */
    const handleCloseOrder = () => {
        if(!showSpinner){
            if(orderFinished && !orderError){
                clearCart();    
            }
            setOpenOrderModal(false);
            setShowForm(true);
            setOrderFinished(false);
            setOrderError(false);
            setShowSpinner(false);
            setOutOfStockArray([]);
        }
    };

    /**
     * Genera una nueva orden con datos del comprador, fecha y los items elegidos en el carrito de compra.
     * @param {*} buyer Datos del comprador con firstName, lastName, email, phone.
     * @returns La orden generada con keys buyer,items,date y total.
     */
    const generateOrder = (buyer) => {
        const date = new Date();
        const total = getTotalPrice();
        const newItemsArray = itemsCompraArray.map((itemCompra) => {
            return {
                id: itemCompra.item.id,
                title: itemCompra.item.titulo,
                price: itemCompra.item.precio,
                quantity: itemCompra.quantity
            }
        });
        const newOrder = {
            buyer: buyer,
            items: newItemsArray,
            date: date,
            total: total
        }
        return newOrder;
    }

    /**
     * Genera y agrega una nueva orden, chequeando primero el stock de los items, y actualizandolos de poder realizarse la compra.
     * @param {*} buyer Datos del comprador con firstName, lastName, email, phone.
     */
    const addOrderAndUpdateStock = (buyer) => {
        const newBatch = getBatch();
        const newOrderReference = getNewOrderReference();
        setShowForm(false);
        setShowSpinner(true);
        const outOfStock = [];
        getProductosByCartArray(itemsCompraArray).then((querySnapshot) => {
            querySnapshot.docs.forEach((docSnapshot, index) => {
                const productData = docSnapshot.data();
                const cantidad = itemsCompraArray[index].quantity;
                if(productData.stock >= cantidad){
                    newBatch.update(docSnapshot.ref, {'stock': productData.stock - cantidad});
                } else {
                    outOfStock.push({id: docSnapshot.id, cantidad: cantidad,...productData});
                }
            })
            if(outOfStock.length === 0){
                const newOrder = generateOrder(buyer);
                newBatch.set(newOrderReference, newOrder);
                newBatch.commit().then(() => {
                    addOrderId(newOrderReference.id);
                    setShowSpinner(false);
                    setOrderFinished(true);
                });
            } else {
                setOutOfStockArray(outOfStock);
                setOrderError(true);
                setShowSpinner(false);
                setOrderFinished(true);
            }
        }).catch(()=>{
            history.push({
                pathname: '/error',
                state: { 
                    title: '??Ups! Ocurrio un problema al generar la orden',
                    message: 'La compra no fue realizada, estamos solucionandolo.',
                    light: true
                }
            });
        })
    }
   
    return (
        <>
            <Button className={classes.pagarButton + " scale-in-hor-left"}  onClick={handleOpenOrder}>
                Ir a pagar <AccountBalanceWalletOutlinedIcon className={classes.arrowIcon} /> 
            </Button>
            <Modal flag={openOrderModal} title={'Orden de pago'} setFlag={handleCloseOrder} >
                    { //Spinner
                        showSpinner ? <div className="spinner-container" >
                            <CircularProgress size={"5rem"} className="spinner" />
                        </div>: <></>
                    }
                    {   //Formulario datos del comprador
                        showForm ? <BuyerForm addOrder={addOrderAndUpdateStock} /> : <></>
                    }
                    { //Mensajes de exito o error de compra
                        (orderFinished && orderError ) ? <Error title={'Hay productos sin stock'} message={'Remove los productos sin el stock pedido:'} light={false}>
                            <ul className={classes.lista}>
                                {
                                    outOfStockArray.map((element, i) =>{
                                        return (
                                            <li key={i}>{element.titulo} pedido por {element.cantidad} unidades.</li>
                                        );
                                    }) 
                                }
                            </ul>
                        </Error> : (orderFinished && !orderError) ? <>
                            <h1>Compra realizada!</h1>
                            <h2>Id de tu compra: {orderId}</h2>
                            <Button className={classes.pagarButton + " scale-in-hor-left"}  onClick={handleCloseOrder}>
                                Continuar
                            </Button>
                        </> : <></>
                    }
            </Modal>
        </>
    );
}