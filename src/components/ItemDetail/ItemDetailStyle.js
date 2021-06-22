import { makeStyles } from '@material-ui/core/styles';

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
        width: "90%",
        margin: 10,
        padding: 2,
        border: "6px solid",
        borderRadius: "25px",
        borderColor: "#8F0B0B"
    }
});

export default useStyles;