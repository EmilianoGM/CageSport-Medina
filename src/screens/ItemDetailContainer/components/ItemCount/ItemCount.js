import React, {useState} from 'react';
import {Grid, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import useStyles from './ItemCountStyle';

export const ItemCount = props => {
    const {stock, onAdd} = props;
    const classes = useStyles();
    const [count, setCount] = useState(0);

    return(
        <Grid className={classes.countContainer} container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item xs={12}>
               <h2 className={classes.contador}>{count}</h2>
            </Grid>
            <Grid item xs={6}>
                <Button className={classes.buttonCustomizado} disabled = {count <= 0} aria-label="reduce"
                    onClick={() => {setCount(Math.max(count - 1, 0));}}
                >
                    <RemoveIcon fontSize="small" />
                </Button>
            </Grid>
            <Grid className={classes.rightButtonContainer} item xs={6}>
                <Button className={classes.buttonCustomizado} disabled = {count >= stock} aria-label="increase"
                    onClick={() => {setCount(count + 1);}} >
                    <AddIcon fontSize="small" />
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button disabled={count === 0} 
                    className={classes.buttonCustomizado + " " + classes.buttonCarrito}
                    onClick={() => {onAdd(count);}} >
                    Agregar al carrito
                </Button>
            </Grid>
        </Grid>
    )
}