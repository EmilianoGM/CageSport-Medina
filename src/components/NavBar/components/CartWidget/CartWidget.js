import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    buttons: {
        color: "white",
        //backgroundColor: "white",
        fontFamily: 'Bebas Neue',
        fontSize: "1.1em",
        '&:hover': {
            backgroundColor: 'white',
            color: 'red',
        },
        //marginLeft: "5px"
    }
}));

export const CartWidget = () => {
    const classes = useStyles();

    return(
    <>
        <Button className={classes.buttons}>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon color="inherit" />
            </Badge>
        </Button>
    </>);
}