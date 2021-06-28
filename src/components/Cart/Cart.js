import React, {useState, useContext, useEffect} from 'react';
import useStyles from './CartStyles';
import {Grid, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext/CartContext';
import BackspaceIcon from '@material-ui/icons/Backspace';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

export const Cart = props => {
    const classes = useStyles();
    const [precioTotal, setPrecioTotal] = useState(0);
    const { itemsCompraArray, removeItemById, clearCart } = useContext(CartContext);
    const removerItem = (id) => {
        removeItemById(id);
    }

    const calcularPrecioTotal = () => {
        let nuevoPrecioTotal = 0;
        itemsCompraArray.forEach((element) => {
            nuevoPrecioTotal += element.item.precio * element.quantity;
        });
        setPrecioTotal(nuevoPrecioTotal);
    }
    
    useEffect(calcularPrecioTotal, [itemsCompraArray]);
    return (
        <>
            {
                itemsCompraArray.length !== 0 ? 
                <div className={classes.cageContainer2}>
                    <h1 className="tituloList puff-in-center"> Carrito de compra </h1>
                    <Grid className={classes.detalleCompra + " slide-in-left"} container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid className={classes.subtitulo} item xs={6}>
                            <h2>Producto</h2>
                        </Grid>
                        <Grid className={classes.subtitulo + ' ' + classes.alinearDerecha} item xs={6}>
                            <h2>Subtotal</h2>
                        </Grid>
                        <div className={classes.bottomLine}></div>
                        {itemsCompraArray.map((element, i) => {
                            return (
                                <>
                                <Grid item xs={12} key={i} >
                                    <div className={classes.itemDetalle} key={i}>
                                        <img className={classes.imagen} src={element.item.imagenUrl} alt={element.item.titulo}></img>
                                        <div className={classes.celdaGrid}>
                                            <p className={classes.fontBolder}>{element.item.titulo}</p>
                                            <div className={classes.celdaPrecio}>
                                                <p>${element.item.precio}c/u</p>
                                                <p>Cantidad: {element.quantity}</p>
                                            </div>
                                        </div>
                                        <div className={classes.celdaGrid + " " + classes.celdaDerecha + " " + classes.alinearDerecha }>
                                            <p>${element.item.precio * element.quantity}</p>
                                            <Button className={classes.deleteButton} onClick={() => { removerItem(element.item.id) }}>
                                                Eliminar<BackspaceIcon className={classes.backIcon} />
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                                <div className={classes.bottomLine}></div>
                                </>
                            );
                        })}
                        <Grid className={classes.precioTotal} item xs={6}>
                            Total:
                        </Grid>
                        <Grid className={classes.alinearDerecha  + " " + classes.precioTotal} item xs={6}>
                            ${precioTotal}
                        </Grid>
                    </Grid>
                    <div className={classes.buttonsContainer}>
                        <Button className={classes.clearButton + " scale-in-hor-left"} onClick={() => {clearCart();}}>
                            Limpiar carrito 
                        </Button>
                    </div>
                    <div className={classes.buttonsContainer}>
                        <Button className={classes.pagarButton + " scale-in-hor-left"}>
                            Ir a pagar <AccountBalanceWalletOutlinedIcon className={classes.arrowIcon} /> 
                        </Button>
                    </div>
                </div>
                : <div className={classes.sinItemsContainer}>
                    <h1 className="tituloList puff-in-center" >No hay items por el momento en el carrito</h1>
                    <Link className={classes.continuarLink} to={'/'}>Continuar comprando</Link>
                </div>

            }
        </>
    );
}