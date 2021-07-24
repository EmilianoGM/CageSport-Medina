import React from 'react';
import { Link } from 'react-router-dom';
import {Grid, Card } from '@material-ui/core';
import useStyles from './ItemStyle';

/**
 * Muestra información de un item en forma de tarjeta junto con su imagen.
 * @param {*} param0 Item a mostrar con id, titulo, precio e imagenUrl.
 * @returns Devuleve el los datos del item agrupados en una Card. 
 */
export const Item = ( {item} ) => {
    const classes = useStyles();
    const { id, titulo, precio, imagenUrl} = item;

    return(
        <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
            <div className={classes.cardContainer}>
                <Card className={classes.card}>
                    <div className={classes.cardContentContainer}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <div className={classes.imgContainer}>
                                    <img className={classes.imagen} src={imagenUrl} alt={titulo}></img>
                                </div>
                            </Grid>
                            <Grid className={classes.celda} item xs={8} sm={8}>
                                {titulo}
                            </Grid>
                            <Grid className={`${classes.celda} ${classes.precio}`} item xs={4} sm={4}>
                                ${precio}
                            </Grid>
                        </Grid>
                        <Link className={classes.detalleLink} to={`/item/${id}`}>Ver detalle</Link>
                    </div>
                </Card>
            </div>
        </Grid>
    );
}