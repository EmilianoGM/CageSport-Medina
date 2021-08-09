import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imgContainer: {
        display:"flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center",
        }
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
    contentContainer:{
        padding: "5px",
        maxWidth: 400,
        color: "white",
        [theme.breakpoints.down('xs')]: {
            margin: "0px auto"
        }
    },
    titulo:{
        margin: 0,
        marginTop: 10,
        textAlign: "center",
        color: "#8F0B0B",
        backgroundColor: "white",
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
    botonera: {
        width: "60%",
        margin: "auto",
    },
    buttonStyled: {
        border: "4px solid",
        borderRadius: "10px", 
        fontFamily: 'Bebas Neue',
        fontSize: "1.2em",
        color: "#8F0B0B",
        backgroundColor: "#f4f5f6",
    },
    buttonTerminar: {
        width: "100%",  
        marginBottom: 5,
        borderColor: "#888888",
        outline: "none",  
        boxShadow: "inset 0px -8px 0px #cccccc, 0px -8px 0px transparent",
        transition: ".13s ease-in-out",
        '&:hover':{
            backgroundColor: "#f4f5f6"
        },
        '&:active': {
            boxShadow: "none",
            backgroundColor: "#cccccc"
        },
    },
    buttonCancelar: {
        display: "flex",
        margin: "10px auto",
        borderColor: "#8F0B0B",
    },
    sinStock: {
        textAlign: 'center',
        fontSize: '0.7em',
        color: "#F36363"
    }
}));


export default useStyles;