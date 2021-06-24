import React, {useState} from 'react';
import {Grid, Button} from '@material-ui/core';
import useStyles from './ItemDetailStyle';
import { ItemCount } from '../ItemCount/ItemCount';
import { useHistory } from 'react-router-dom'
/**
 * Muestra en detalle la información de un item junto con su imagen correspondiente.
 * @param {*} param0 El item a mostrar con titulo, detalle, precio e imagenUrl.
 * @returns El producto con la información organizada.
 */
export const ItemDetail = ({ item }) => {
    const classes = useStyles();
    const history = useHistory();
    const { titulo, detalle, precio, imagenUrl } = item;
    const [compraTerminada, setCompraTerminada] = useState(false);

    const agregar = (cantidad) => {
        console.log("CANTIDAD: ", cantidad); //linea de prueba, recibe la cantidad de items seleccionada por el usuario
        setCompraTerminada(true);
    };

    const redireccionar = () =>{
        history.push("/cart");
    }

    return(
        <Grid container direction="row" justify="center" alignItems="flex-start" >
            <Grid item xs={12} sm={6}>
                <div className={classes.imgContainer}>
                    <img className={classes.imagen} src={imagenUrl} alt={titulo}></img>
                </div> 
            </Grid>    
            <Grid item xs={12} sm={6}>
                <div className={classes.contentContainer}>
                    <div className={classes.titleContainer}>
                        <h2 className={classes.titulo} >{titulo}</h2>
                    </div>
                    <h2 className={classes.precio}>$ {precio}</h2>
                    <p className={classes.detalle}>{detalle}</p>
    
                    {compraTerminada ? <div className={classes.botonera} >
                            <Button className={classes.buttonTerminar} onClick={() => {redireccionar()}}> Terminar compra </Button>
                            <Button className={classes.buttonCancelar} onClick={() => {setCompraTerminada(false)}}>Cancelar</Button>
                        </div> : <ItemCount stock={3} initial={0} onAdd={agregar}></ItemCount>
                    }
                </div>
            </Grid>
        </Grid>
    );
}