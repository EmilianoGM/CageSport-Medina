import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridItem:{
        display: "flex",
        alignContent: "center"
    },
    gridButton:{
        justifyContent: "center",
        textAlign: "center"
    },
    cardContainer: {
        display:"flex",
        justifyContent: "center",
        margin: "0px auto"
    },
    card: {
      maxWidth: 400,
      margin: 10
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      margin: 10
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
        textDecoration: "none",
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

export default useStyles;