import React, {useEffect, useState} from 'react';
import { getProductos } from '../../services/CloudFirestoreService';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './ItemListContainerStyle';


/**
 * Pide la data al servidor, la filtra según categoria recibida por parámetro y la envia a ItemList.
 * @returns ItemList con spinner de espera y título.
 */
export const ItemListContainer = () => {
    const classes = useStyles();
    const [itemsAMostrar, setItemsAMostrar] = useState([]);
    const [dataCargada, setDataCargada] = useState(false);
    const { id } = useParams();

    /**
     * Obtiene la data desde firebase segun id de categoría.
     */
    const getData = () => {
        setDataCargada(false);
        getProductos(id).then((querySnapshot) => {
            let arrayData = [];
            querySnapshot.forEach((doc) => {
                arrayData.push({id: doc.id, ...doc.data()});
            });
            setItemsAMostrar(arrayData);
        }).catch((error) => {
            console.log("ERROR:", error);
        }).finally(() => {
            setDataCargada(true);
        });
    }

    useEffect(getData, [id]);

    return (
        <div>
            {
                dataCargada ? <>
                    <h1 className="tituloList puff-in-center" >
                        {itemsAMostrar.length !== 0 ? "LISTA DE PRODUCTOS" : "¡Ups! Parece que esa categoría no existe."} 
                    </h1>
                    <ItemList items={itemsAMostrar}></ItemList>
                </> : <div className={classes.spinnerContainer} >
                    <CircularProgress size={"5rem"} className={classes.spinner} />
                </div>
            }
        </div>
    );
}