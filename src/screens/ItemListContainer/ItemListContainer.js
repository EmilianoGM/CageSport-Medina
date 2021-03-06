import React, {useEffect, useState} from 'react';
import { ItemList } from './components/ItemList/ItemList';
import { getProductos } from '../../services/CloudFirestoreService';
import { useParams, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * Pide la data al servidor, la filtra según categoria recibida por parámetro y la envia a ItemList.
 * @returns ItemList con spinner de espera y título.
 */
export const ItemListContainer = () => {
    const history = useHistory();
    const [itemsAMostrar, setItemsAMostrar] = useState([]);
    const [dataCargada, setDataCargada] = useState(true);
    const { id } = useParams();

    /**
     * Obtiene la data desde firebase segun id de categoría.
     */

    const getData = () => {
        setDataCargada(false);
        getProductos(id).then((querySnapshot) => {
            const arrayData = querySnapshot.docs.map((doc) => {
               return {id: doc.id, ...doc.data()};
            });
            setItemsAMostrar(arrayData);
        }).catch((error) => {
            console.log("ERROR", error);
            history.push({
                pathname: '/error',
                state: { 
                    title: '¡Ups! Ocurrio un problema al mostrar los productos',
                    message: 'Los productos no estan disponibles en este momento, estamos solucionandolo.',
                    light: true
                }
            });
        }).finally(() => {
            setDataCargada(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(getData, [id]);  

    return (
        <>
            {
                dataCargada ? <>
                    <h1 className="tituloList puff-in-center" >
                        {itemsAMostrar.length !== 0 ? "LISTA DE PRODUCTOS" : "¡Ups! Parece que esa categoría no existe."} 
                    </h1>
                    <ItemList items={itemsAMostrar}></ItemList>
                </> : <div className="spinner-container" >
                    <CircularProgress size={"5rem"} className="spinner" />
                </div>
            }
        </>
    );
}