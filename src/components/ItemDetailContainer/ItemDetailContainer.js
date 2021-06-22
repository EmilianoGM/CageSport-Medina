import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { DataSimulator } from '../../services/DataSimulator';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './ItemDetailContainerStyle';

const dataSimulator = new DataSimulator(); // Contiene data para propagar en la app

/**
 * Promesa para simular un pedido al servidor con retraso de 2 segundos.
 */
const espera = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dataSimulator.itemsDataArray);
    }, 2000);
})

/**
 * Pide la data al servidor y la filtra según id recibido por parámetro, para obtener un único item y enviarlo a ItemDetail.
 * @returns ItemDetail con la información requerida.
 */
export const ItemDetailContainer = () => {
    const classes = useStyles();
    const { id } = useParams();

    const [itemDetalle, setItemDetalle] = useState([]);
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [itemNoEncontrado, setItemNoEncontrado] = useState(false);

    /**
     * Obtiene la data y la filtra según el id del item.
     */
    const getItem = () => {
        espera.then(data => {
            const itemAMostrar = data.find(item => item.id === parseInt(id, 10));
            if(itemAMostrar)
            {
                setItemDetalle(itemAMostrar);
                setMostrarDetalle(true);
            } else {
                setItemNoEncontrado(true);
            }
            
        });
    }

    useEffect(getItem, [id]);

    return (
        <div className={classes.divContainer}>
        {
            itemNoEncontrado ? <h1 className={classes.notFoundMensaje}>¡Ups! Ese item no se encuentra en nuestro catálogo.</h1> : <></>
        }
        {
            mostrarDetalle ? <ItemDetail item={itemDetalle}></ItemDetail> : 
            <div className={classes.spinnerContainer} >
                <CircularProgress size={"5rem"} className={classes.spinner} />
            </div>
        }
        </div>
    );
}