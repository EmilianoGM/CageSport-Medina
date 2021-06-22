import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { DataSimulator } from '../../services/DataSimulator';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './ItemDetailContainerStyle';

const dataSimulator = new DataSimulator();

const espera = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dataSimulator.itemsDataArray);
    }, 2000);
})


export const ItemDetailContainer = () => {
    const classes = useStyles();
    const { id } = useParams();

    const [itemDetalle, setItemDetalle] = useState([]);
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [itemNoEncontrado, setItemNoEncontrado] = useState(false);

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