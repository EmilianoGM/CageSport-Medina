import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridItem:{
        display: "flex",
        alignContent: "center"
    },
    cardContainer: {
        display:"flex",   
        justifyContent: "center",
        margin: "0px auto"
    },
    card: {
      maxWidth: 400,
      margin: 10,
      padding: 10
    },
    cardContentContainer: {
        display:"flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    imgContainer:{
        display: "flex",
        justifyContent: "center",
        minWidth: "20px",
        minHeight: "20px",
        background: "transparent url('/loadingImage.gif') center no-repeat"
    },
    imagen: {
        maxWidth: 380,
        maxHeight: 200,
        height: "auto",
        width: "auto",
    },
    celda:{
        fontSize: "1.3em",
        fontWeight: "bolder"
    },
    precio: {
        textAlign: "right"
    },
    detalleLink: {
        width: "85%",
        padding: "5px 10px",
        margin: "5px auto",
        textAlign: "center",
        textDecoration: "none",
        color: "#ff2121",
        background: "transparent",
        fontSize: "1.4em",
        fontWeight: "bold",
        fontFamily: "Montserrat",
        border: "3px solid",
        borderRadius: "0px 0px 18px 18px",
        borderColor: "#ff2121",
        boxShadow: "0px 7px 17px 2px rgb(251 5 5 / 43%)",
        '&:hover':{
            boxShadow: "0px 7px 17px 6px rgb(251 5 5)"
        },
        '&:active':{
            boxShadow: "inset -1px 3px 17px 6px rgb(251 5 5 / 43%)"
        }
    }
  });

export default useStyles;