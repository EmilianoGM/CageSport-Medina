import React, {useEffect, useState} from 'react';
import { getProductoById } from '../../services/CloudFirestoreService';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { useParams, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './ItemDetailContainerStyle';

/**
 * Pide la data al servidor y la filtra según id recibido por parámetro, para obtener un único item y enviarlo a ItemDetail.
 * @returns ItemDetail con la información requerida.
 */
export const ItemDetailContainer = props => {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const [itemDetalle, setItemDetalle] = useState({});

    /**
     * Obtiene la data y la filtra según el id del item.
     */
    const getItem = () => {
        getProductoById(id).then((doc) => {
            if (doc.exists) {
                setItemDetalle({id: doc.id, ...doc.data()});
            } else {
                history.push({
                    pathname: '/error',
                    state: { 
                        title: '¡Ups! No se encuentra ese producto.',
                        message: 'El producto seleccionado no esta disponible en el catalogo.'
                    }
                  });
            }
        }).catch(() => {
            history.push({
                pathname: '/error',
                state: { 
                    title: '¡Ups! Ocurrio un problema.',
                    message: 'Los productos no estan disponibles en este momento, vuelva mas tarde.'
                }
              });
        });
    }

    useEffect(getItem, [history, id]);

    return (
        <div className={classes.itemDetailContainer}>
        {
            (itemDetalle && Object.keys(itemDetalle).length !== 0)  ? <ItemDetail item={itemDetalle} /> : 
            <div className="spinner-container" >
                <CircularProgress size={"5rem"} className="spinner" />
            </div>
        }
        </div>
    );
}