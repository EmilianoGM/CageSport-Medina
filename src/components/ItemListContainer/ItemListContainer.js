import React, {useEffect, useState} from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { DataSimulator } from '../../services/DataSimulator';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './ItemListContainerStyle';

const dataSimulator = new DataSimulator();

const espera = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dataSimulator.itemsDataArray);
    }, 2000);
})

export const ItemListContainer = () => {
    const classes = useStyles();
    const [itemsAMostrar, setItemsAMostrar] = useState([]);
    const [dataCargada, setDataCargada] = useState(false);
    const { id } = useParams();

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
                    <h1  className={classes.tituloList} >
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