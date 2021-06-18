import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ItemList } from '../ItemList/ItemList';

const useStyles = makeStyles({
    tituloList:{
        fontFamily: "Coda",
        textAlign: "center",
        fontWeight: "bold",
        color: "#8D0A0A"
    }
});

/*
<ItemCount stock={3} initial={0}  ></ItemCount>
 */

let itemsDePrueba = [
    {
        titulo: "Guantes",
        precio: 1500,
        imagenUrl: "/imagenes/guantes001.jpg"
    },
    {
        titulo: "Guantes",
        precio: 1600,
        imagenUrl: "/imagenes/guantes001.jpg"
    },
    {
        titulo: "Guantes",
        precio: 2500,
        imagenUrl: "/imagenes/guantes001.jpg"
    }
];

const espera = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(itemsDePrueba);
    }, 2000);
})

export const ItemListContainer = () => {
    const classes = useStyles();
    const [itemsAMostrar, setItemsAMostrar] = useState([]);
    
    const getData = () => {
        espera.then(data => setItemsAMostrar(data));
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1 className={classes.tituloList} >LISTA DE PRODUCTOS</h1>
            <ItemList items={itemsAMostrar}></ItemList>
        </div>
    );
}