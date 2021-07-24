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
    const { addItem, modifyQuantity } = useContext(CartContext);
    const { id, titulo, detalle, precio, imagenUrl } = item;
    const [cantidad, setCantidad] = useState(0);
    const [compraTerminada, setCompraTerminada] = useState(false);
    
    /**
     * Cancela el agregado del item, remueve su cantidad del array de compra y muestra nuevamente el ItemCount.
     */
    const cancelPurchase = () => {
        modifyQuantity(id, -cantidad);
        setCantidad(0);
        setCompraTerminada(false);
    }

    /**
     * Agrega un item al array de compra y oculta el ItemCount.
     * @param {*} cantidadItem Cantidad a agregar.
     */
    const addToCart = (cantidadItem) => {
        setCantidad(cantidadItem);
        addItem(item, cantidadItem);
        //console.log("CANTIDAD: ", cantidadItems); //linea de prueba, recibe la cantidad de items seleccionada por el usuario
        setCompraTerminada(true);
    };

    /**
     * Redirecciona a cart.
     */
    const redirectCart = () =>{
        setCantidad(0);
        history.push("/cart");
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
                        </div> : <ItemCount stock={item.stock} initial={0} onAdd={addToCart} />
                    }
                </div>
            </Grid>
        </Grid>
    );
}