import React, {useState, useContext} from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../../../contexts/CartContext/CartContext';
import { useHistory } from 'react-router-dom';
import {Grid, Button} from '@material-ui/core';
import useStyles from './ItemDetailStyle';


/**
 * Muestra en detalle la información de un item junto con su imagen correspondiente.
 * @param {*} param0 El item a mostrar con titulo, detalle, precio e imagenUrl.
 * @returns El producto con la información organizada.
 */
export const ItemDetail = ({ item }) => {
    const classes = useStyles();
    const history = useHistory();
    const { addItem, removeItemById, isInCart } = useContext(CartContext);
    const { id, titulo, detalle, precio, imagenUrl, stock } = item;
    const [compraTerminada, setCompraTerminada] = useState(false);
    
    /**
     * Cancela el agregado del item, remueve su cantidad del array de compra y muestra nuevamente el ItemCount.
     */
    const cancelPurchase = () => {
        removeItemById(id);
        setCompraTerminada(false);
    }

    /**
     * Agrega un item al array de compra y oculta el ItemCount.
     * @param {*} cantidadItem Cantidad a agregar.
     */
    const addToCart = (cantidadItem) => {
        addItem(item, cantidadItem);
        setCompraTerminada(true);
    };

    /**                                                                                                                                                                                     
     * Redirecciona a cart.
     */
    const redirectCart = () =>{
        history.push("/cart");
    }

    const getStock = () => {
        const cartItem = isInCart(id);
        if(cartItem !== undefined){
            return cartItem.item.stock - cartItem.quantity;
        } else {
            return stock;
        }
    }

    return(
        <Grid container direction="row" justify="center" alignItems="flex-start" >
            <Grid  className={classes.imgContainer} item xs={12} sm={6}>
                <img className={classes.imagen} src={imagenUrl} alt={titulo}></img>
            </Grid>    
            <Grid item xs={12} sm={6}>
                <div className={classes.contentContainer}>
                    <h2 className={classes.titulo} >{titulo}</h2>
                    <h2 className={classes.precio}>$ {precio}</h2>
                    <p className={classes.detalle}>{detalle}</p>
    
                    {compraTerminada ? <div className={classes.botonera} >
                            <Button className={`${classes.buttonStyled} ${classes.buttonTerminar}`} onClick={() => {redirectCart()}}> Terminar compra </Button>
                            <Button className={`${classes.buttonStyled} ${classes.buttonTerminar}`} onClick={() => {history.goBack()}}> Continuar comprando </Button>
                            <Button className={`${classes.buttonStyled} ${classes.buttonCancelar}`} onClick={() => {cancelPurchase()}}>Cancelar</Button>
                        </div> : <ItemCount stock={getStock()} onAdd={addToCart} />
                    }
                    { (getStock() <= 0 && !compraTerminada)? <h2 className={classes.sinStock}>No hay más stock por el momento.</h2> : <></>}
                </div>
            </Grid>
        </Grid>
    );
}