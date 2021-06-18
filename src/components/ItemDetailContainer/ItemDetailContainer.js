import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';


const dataDetalle = {
    titulo: "Guantes",
    precio: "$1500",
    detalle: "Guantes de boxeo TITLE de 16 oz con ajuste de velcro.",
    imagenUrl: "/imagenes/guantes001.jpg",
};

const espera = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dataDetalle);
    }, 2000);
})


export const ItemDetailContainer = () => {
    const [itemDetalle, setItemDetalle] = useState([]);
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    const getItem = () => {
        espera.then(data => {
            setItemDetalle(data);
            setMostrarDetalle(true);
        });
    }
    useEffect(() => {
        getItem();
    }, []);

    return (
        <>
        {
            mostrarDetalle ? <ItemDetail display="none" item={itemDetalle}></ItemDetail> : <></>
        }
        </>
    );
}