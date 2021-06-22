import React from 'react';
import {Grid, Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './ItemStyle';

export const Item = ( {item} ) => {
    const classes = useStyles();
    const { id, titulo, precio, imagenUrl} = item;

    return(
        <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
            <div className={classes.cardContainer}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <div className={classes.imgContainer}>
                                    <img className={classes.imagen} src={imagenUrl} alt={titulo}></img>
                                </div>
                            </Grid>
                            <Grid className={classes.celda} item xs={12} sm={6}>
                                {titulo}
                            </Grid>
                            <Grid className={classes.celda} item xs={12} sm={6}>
                                <div className={classes.precio}>${precio}</div>
                            </Grid>
                            <Grid className={classes.gridButton} item xs={12}>
                                <Link className={classes.detalleLink} to={'/item/' + id}>Ver detalle</Link>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </Grid>
    );
}