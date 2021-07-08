import React, {useState, useContext} from 'react';
//Contextos
import { CartContext } from '../../contexts/CartContext/CartContext';
//Servicios
import { addOrderDocument, batch, getProductosByCartArray } from '../../services/CloudFirestoreService';
//Componentes
import { BuyerForm } from './BuyerForm/BuyerForm';
//Material
import {Dialog, DialogTitle, DialogContent, Button, IconButton, CircularProgress} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
//Estilos
import useStyles from './OrderStyle';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export const Order = props => {
    const classes = useStyles();
    //Pros - Context
    const { totalPrice, addOrderId} = props;
    const { itemsCompraArray, clearCart } = useContext(CartContext);
    //Flags
    const [openOrderDialog, setOpenOrderDialog] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [orderFinished, setOrderFinished] = useState(false);
    const [orderError, setOrderError] = useState(false);
    //Data
    const [outOfStockArray, setOutOfStockArray] = useState([]);
    const [orderId, setOrderId] = useState();

    /**
     * Maneja la apertura de la ventana de dialogo;
     */
    const handleOpenOrder = () => {
        setOpenOrderDialog(true);
    };
    /**
     * Maneja el cierre de la ventana de dialogo.
     */
    const handleCloseOrder = () => {
        if(orderFinished && !orderError){
            clearCart();    
        }
        setOpenOrderDialog(false);
        setShowForm(true);
        setOrderFinished(false);
        setOrderError(false);
        setShowSpinner(false);
        setOutOfStockArray([]);
        setOrderId();
    };

    /**
     * Genera una nueva orden con datos del comprador, fecha y los items elegidos en el carrito de compra.
     * @param {*} buyer Datos del comprador con firstName, lastName, email, phone.
     * @returns La orden generada con keys buyer,items,date y total.
     */
    const generateOrder = (buyer) => {
        const date = new Date();
        let newItemsArray = [];
        itemsCompraArray.forEach(element => {
            let data = {
                id: element.item.id,
                title: element.item.titulo,
                price: element.item.precio,
                quantity: element.quantity
            }
            newItemsArray.push(data);
        });
        const newOrder = {
            buyer: buyer,
            items: newItemsArray,
            date: date,
            total: totalPrice
        }
        return newOrder;
    }
    /**
     * Agrega una nueva orden a la base de datos de firebase.
     * @param {*} buyer Datos del comprador con firstName, lastName, email, phone.
     */
    const addNewOrder = (buyer) => {
        const newOrder = generateOrder(buyer);
        try{
            addOrderDocument(newOrder).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                setOrderId(docRef.id);
                addOrderId(docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        } catch(error) {
            console.log("Firebase add doc error:", error);
        }
    }

    /**
     * Genera y agrega una nueva orden, chequeando primero el stock de los items, y actualizandolos de poder realizarse la compra.
     * @param {*} buyer Datos del comprador con firstName, lastName, email, phone.
     */
    const addOrderAndUpdateStock = (buyer) => {
        const newBatch = batch(); 
        setShowForm(false);
        setShowSpinner(true);
        let outOfStock = [];
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
                newBatch.commit().then(() => {
                    addNewOrder(buyer);         
                });
            } else {
                setOutOfStockArray(outOfStock);
                setOrderError(true);
            }
        }).finally(() => {
            console.log("Stock array:", outOfStockArray);
            setShowSpinner(false);
            setOrderFinished(true);
        });
    }
   
    return (
        <div>
            <Button className={classes.pagarButton + " scale-in-hor-left"}  onClick={handleOpenOrder}>
                Ir a pagar <AccountBalanceWalletOutlinedIcon className={classes.arrowIcon} /> 
            </Button>
            <Dialog fullWidth maxWidth='md' onClose={handleCloseOrder} aria-labelledby="customized-dialog-title" open={openOrderDialog}>
                <DialogTitle id="form-dialog-title">
                    <span className={classes.dialogTitle}>Orden de pago</span>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseOrder}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {
                        showSpinner ? <div className={classes.spinnerContainer} >
                            <CircularProgress size={"5rem"} className={classes.spinner} />
                        </div>: <></>
                    }
                    {
                        showForm ? <BuyerForm addOrder={addOrderAndUpdateStock} totalPrice={totalPrice} ended={!showForm}/> : <></>
                    }
                    
                    {
                        (orderFinished && orderError ) ? <>
                            <h1>No fue posible ejecutar la compra</h1>
                            <h2>Productos sin el stock pedido: </h2>
                            <ul>
                                {
                                    outOfStockArray.map((element, i) =>{
                                        console.log("Elemento", element);
                                        return (
                                            <li key={i}>{element.titulo} pedido por {element.cantidad} unidades.</li>
                                        );
                                    }) 
                                }
                            </ul>
                        </> : (orderFinished && !orderError) ? <>
                            <h1>Compra realizada!</h1>
                            <h2>Id de tu compra: {orderId}</h2>   
                        </> : <></>
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}