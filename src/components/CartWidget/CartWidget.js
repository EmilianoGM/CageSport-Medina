import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { useHistory } from 'react-router-dom';
import {Button, Badge} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    buttons: {
        color: "white",
        fontFamily: 'Bebas Neue',
        fontSize: "1.1em",
        '&:hover': {
            backgroundColor: 'white',
            color: 'red',
        },
    }
}));

export const CartWidget = () => {
    const classes = useStyles();
    const history = useHistory();
    const { itemsCompraArray } = useContext(CartContext);
    const [cantidadDeItems, setCantidadDeItems] = useState(0);

    /**
     * Redirecciona a cart.
     */
     const redireccionar = () =>{
        history.push("/cart");
    }

    const calcularCantidadTotal = () => {
        let cantidadTotal = 0;
        itemsCompraArray.forEach((element) => {
            cantidadTotal += element.quantity;
        });
        setCantidadDeItems(cantidadTotal);
    }

    useEffect(calcularCantidadTotal, [itemsCompraArray]);

    return(
        <>
        {
            itemsCompraArray.length !== 0 ? 
            <Button className={classes.buttons} onClick={() => {redireccionar()}} >
                <Badge badgeContent={cantidadDeItems} color="secondary">
                    <ShoppingCartIcon color="inherit" />
                </Badge>
            </Button> : <></>
        }
        </>
    );
}