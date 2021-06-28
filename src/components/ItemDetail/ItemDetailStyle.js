import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    contentContainer:{
        padding: "5px",
        maxWidth: 400,
        color: "white"
    },
    titleContainer:{
        backgroundColor: "white"
    },
    titulo:{
        margin: 0,
        marginTop: 10,
        textAlign: "center",
        color: "#8F0B0B",
        fontSize: "2em",
        fontFamily: "Coda",
    },
    precio:{
        fontFamily: "Source Code Pro",
        fontWeight: "bolder",
        fontSize: "1.5em",
        textAlign: "center",
        border: "2px solid white"
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
    },
    botonera: {
        width: "60%",
        margin: "auto",
    },
    buttonTerminar: {
        marginBottom: 5,
        border: "4px solid #888888",
        outline: "none",
        backgroundColor: "#f4f5f6",
        borderRadius: "10px",
        boxShadow: "inset 0px -8px 0px #cccccc, 0px -8px 0px transparent",
        transition: ".13s ease-in-out",
        '&:hover':{
            backgroundColor: "#f4f5f6"
        },
        '&:active': {
            boxShadow: "none",
            backgroundColor: "#cccccc"
        },
        width: "100%",
        color: "#8F0B0B",
        fontFamily: 'Bebas Neue',
        fontSize: "1.2em"
    },
    buttonCancelar: {
        display: "flex",
        margin: "10px auto",
        color: "#8F0B0B",
        fontFamily: 'Bebas Neue',
        fontSize: "1.2em",
        backgroundColor: "#f4f5f6",
        border: "4px solid #8F0B0B",
        borderRadius: "10px",
    }
});

export default useStyles;