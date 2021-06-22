import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './ItemDetailStyle';

export const ItemDetail = ({ item }) => {
    const classes = useStyles();
    const { titulo, detalle, precio, imagenUrl } = item;

    return(
        <Grid container direction="row" justify="center" alignItems="flex-start" >
            <Grid item xs={6} sm={6}>
                <div className={classes.imgContainer}>
                    <img className={classes.imagen} src={imagenUrl} alt={titulo}></img>
                </div> 
            </Grid>    
            <Grid item xs={6} sm={6}>
                <div className={classes.contentContainer}>
                    <div className={classes.titleContainer}>
                        <h2 className={classes.titulo} >{titulo}</h2>
                    </div>
                    <h2 className={classes.precio}>$ {precio}</h2>
                    <p className={classes.detalle}>{detalle}</p>
                </div>
            </Grid>
        </Grid>
    );
}