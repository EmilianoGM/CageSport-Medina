import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    contentContainer:{
        padding: "5px",
        maxWidth: 400,
    },
    titleContainer:{
        backgroundColor: "black"
    },
    titulo:{
        margin: 0,
        marginTop: 10,
        textAlign: "center",
        color: "white",
        fontSize: "2em",
        fontFamily: "Coda",
    },
    precio:{
        fontFamily: "Source Code Pro",
        fontWeight: "bolder",
        fontSize: "1.5em",
        textAlign: "center",
        border: "2px solid black"
    },
    detalle: {
        fontSize: "1.5em",
        fontFamily: "Coda",
    },
    imgContainer: {
        display:"flex",
        justifyContent: "flex-end"
    },
    imagen: {
        maxWidth: 400,
        height: "auto",
        width: "100%",
        margin: 10,
        padding: 2,
        border: "6px solid",
        borderRadius: "25px",
        borderColor: "#8F0B0B"
    }
});

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
                    <h2 className={classes.precio}>{precio}</h2>
                    <p className={classes.detalle}>{detalle}</p>
                </div>
            </Grid>
        </Grid>
    );
}