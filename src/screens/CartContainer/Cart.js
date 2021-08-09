import React, {useState, useContext} from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { Order } from './components/Order/Order';
import { Link } from 'react-router-dom';
import {Grid, Button} from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import useStyles from './CartStyles';

/**
 * Muestra al usuario el carrito de compra.
 */
export const Cart = () => {
    const classes = useStyles();
    const [lastOrderId, setLastOrderId] = useState("");
    const { itemsCompraArray, removeItemById, getTotalPrice , clearCart } = useContext(CartContext);

    /**
     * Agrega el id de una orden de compra.
     * @param {*} orderId id (string)
     */
    const addOrderId = (orderId) => {
        setLastOrderId(orderId);
    }

    return (
        <>
            {
                itemsCompraArray.length !== 0 ? 
                <div className={classes.cageContainer}>
                    <h1 className="tituloList puff-in-center"> Carrito de compra </h1>
                    <Grid className={`${classes.detalleCompra} slide-in-left`} container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid className={classes.subtitulo} item xs={6}>
                            <h2>Producto</h2>
                        </Grid>
                        <Grid className={`${classes.subtitulo} ${classes.alinearDerecha}`} item xs={6}>
                            <h2>Subtotal</h2>
                        </Grid>
                        <div className={classes.bottomLine}></div>
                        {itemsCompraArray.map((element, i) => {
                            return (
                                <Grid item xs={12} key={i}>
                                    <div className={classes.itemDetalle}>
                                        <img className={classes.imagen} src={element.item.imagenUrl} alt={element.item.titulo}></img>
                                        <div className={classes.celdaGrid}>
                                            <h3 className={classes.itemTitulo}>{element.item.titulo}</h3>
                                            <p>${element.item.precio}c/u</p>
                                            <p>Cantidad: {element.quantity}</p>
                                        </div>
                                        <div className={`${classes.celdaGrid } ${classes.celdaDerecha} ${classes.alinearDerecha}`}>
                                            <h3 className={classes.itemTitulo}>${element.item.precio * element.quantity}</h3>
                                            <Button className={classes.deleteButton} onClick={() => { removeItemById(element.item.id) }}>
                                                Eliminar<BackspaceIcon className={classes.backIcon} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={classes.bottomLine}></div>
                                </Grid>
                            );
                        })}
                        <Grid className={classes.precioTotal} item xs={6}>
                            Total:
                        </Grid>
                        <Grid className={`${classes.alinearDerecha} ${classes.precioTotal}`} item xs={6}>
                            ${getTotalPrice()}
                        </Grid>
                    </Grid>
                    <div className={classes.buttonsContainer}>
                        <Button className={`${classes.clearButton} scale-in-hor-left`} onClick={() => {clearCart();}}>
                            Limpiar carrito 
                        </Button>
                    </div>
                    <Order orderId={lastOrderId} addOrderId={addOrderId} itemsCompraArray={itemsCompraArray} clearCart={clearCart} getTotalPrice={getTotalPrice} />
                </div>
                : <div className={classes.sinItemsContainer}>
                    { lastOrderId ? <><h1 className="tituloList">¡COMPRA EXITOSA!</h1>
                    <h1 className="tituloList">Tu orden de compra: {lastOrderId}.</h1> </> : 
                    <h1 className="tituloList puff-in-center" >No hay items por el momento en el carrito</h1> }
                    <Link className={classes.continuarLink} to={'/'}>Continuar comprando</Link>
                    
                </div>
            }
        </>
    );
}