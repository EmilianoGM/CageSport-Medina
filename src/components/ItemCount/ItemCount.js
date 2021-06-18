import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "30%",
        margin: "auto",
        //display: "flex",
        //alignItems: "center",
        //justifyContent: "center",
    },
    title: {
        textAlign: "center"
    },
    botonera:{
        //display: "inline",
        display: "flex",
        //width: "",
        margin:"auto",
        justifyContent: "space-between"

    },
    divCarrito:{
        justifyContent: "center"
    },
    buttonCarrito: {
        display: "flex",
        margin: "0 auto",
        fontSize: "1.2em",
        color: "#2A0E49",
        backgroundColor: "#FF5733"
    }
}));


export const ItemCount = ({stock, initial, onAdd}) => {
    const classes = useStyles();

    const [count, setCount] = React.useState(initial);
    /*
    const [isDisabled, setIsDisabled] = React.useState(false);
*/
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>{count}</h2>
            </div>
            <div className={classes.botonera}> 
                <Button
                    disabled = {count <= 0}
                    aria-label="reduce"
                    onClick={() => {
                        setCount(Math.max(count - 1, 0));
                    }}
                >
                    <RemoveIcon fontSize="small" />
                </Button>
                <Button
                    disabled = {count >= stock}
                    aria-label="increase"
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    <AddIcon fontSize="small" />
                </Button>
            </div>
            <div>
                <Button disabled={count === 0} className={classes.buttonCarrito} variant="contained" >Agregar al carrito</Button>
            </div>
        </div>
    )
}