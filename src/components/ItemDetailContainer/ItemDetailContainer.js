import React, {useEffect, useState} from 'react';
import { getProductoById } from '../../services/CloudFirestoreService';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './ItemDetailContainerStyle';

/**
 * Pide la data al servidor y la filtra según id recibido por parámetro, para obtener un único item y enviarlo a ItemDetail.
 * @returns ItemDetail con la información requerida.
 */
export const ItemDetailContainer = props => {
    const classes = useStyles();
    const { id } = useParams();

    const [itemDetalle, setItemDetalle] = useState();
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [itemNoEncontrado, setItemNoEncontrado] = useState(false);

    /**
     * Obtiene la data y la filtra según el id del item.
     */
    const getItem = () => {
        setMostrarDetalle(false);
        getProductoById(id).then((doc) => {
            if (doc.exists) {
                setItemDetalle({id: doc.id, ...doc.data()});
            } else {
                setItemNoEncontrado(true);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            setItemNoEncontrado(true);
        }).finally(() => {
            setMostrarDetalle(true);
        });
    }

    useEffect(getItem, [id]);

    return (
        <div className={classes.divContainer}>
        {
            mostrarDetalle ? <>
                {itemNoEncontrado ? <h1 className={classes.notFoundMensaje}>¡Ups! Ese item no se encuentra en nuestro catálogo.</h1> : 
                <ItemDetail item={itemDetalle}></ItemDetail>}
            </> : 
            <div className={classes.spinnerContainer} >
                <CircularProgress size={"5rem"} className={classes.spinner} />
            </div>
        }
        </div>
    );
}