import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardContent, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridItem:{
        alignContent: "center"
    },
    gridButton:{
        justifyContent: "center",
        textAlign: "center"
    },
    card: {
      maxWidth: 300,
      margin: 10
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      margin: 10
    },
    celda:{
        "& h2": {
            margin: 0
        }
    },
    precio: {
        textAlign: "right"
    },
    addButton: {
        borderRadius: 50,
        fontFamily: "Montserrat",
        padding: "5px 10px",
        color: "#C30038",
        fontSize: "1.2em",
        border: "2px solid",
        borderColor: "#C30038",
        boxShadow: "0px 4px 5px 1px rgb(0 0 0 / 25%)",
        background: "transparent",

        '&:hover':{
            background: "#C30038",
            color: "white",
            cursor: "pointer"
        }
    }
  });
export const Item = ( {item} ) => {
    const classes = useStyles();
    const { titulo, precio, imagenUrl} = item;
    return(
        <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={imagenUrl}
                    title={titulo}
                />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid className={classes.celda} item xs={12} sm={6}>
                            <h2>{titulo}</h2>
                        </Grid>
                        <Grid className={classes.celda} item xs={12} sm={6}>
                            <h2 className={classes.precio}>$ {precio}</h2>
                        </Grid>
                        <Grid className={classes.gridButton} item xs={12}>
                            <button className={classes.addButton} onClick={()=>{console.log("Clickeado")}}>Ver detalle</button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
        
        
    );
}