import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../../contexts/CartContext/CartContext';
import { useHistory } from 'react-router-dom';
import {Button, Badge} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

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

/**
 * Muestra al usuario un Widget con la cantidad de items que se encuentra en el carrito mediante CartContext.
 */
export const CartWidget = () => {
    const classes = useStyles();
    const history = useHistory();
    const { itemsCompraArray, getTotalQuantity } = useContext(CartContext);
    const [cantidadDeItems, setCantidadDeItems] = useState(0);

    /**
     * Redirecciona a cart.
     */
     const redireccionar = () =>{
        history.push("/cart");
    }

    useEffect(() => {
        const cantidadTotal = getTotalQuantity();
        setCantidadDeItems(cantidadTotal);
    }, [itemsCompraArray, getTotalQuantity]);

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