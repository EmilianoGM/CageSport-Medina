import React, {useEffect, useState} from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { DataSimulator } from '../../services/DataSimulator';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './ItemListContainerStyle';

const dataSimulator = new DataSimulator();  // Contiene data para propagar en la app

/**
 * Promesa para simular un pedido al servidor con retraso de 2 segundos.
 */
const espera = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dataSimulator.itemsDataArray);
    }, 2000);
})

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
     * Obtiene la data y la filtra segun id de categoría
     */
    const getData = () => {
        espera.then((data) => {
            setDataCargada(true);
            if(id !== undefined && id !== null){
                setItemsAMostrar(
                    data.filter(item => item.categoria === id)
                );
            } else {
                setItemsAMostrar(data);
            }
            
        })
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