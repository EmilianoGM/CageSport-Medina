import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cageContainer:{
        width: "100%",
        marginBottom: "50px",
        textAlign: "center"
    },
    alinearDerecha: {
        textAlign: "right",
    },
    detalleCompra:{
        textAlign: "start",
        backgroundColor: "white",
        border: "5px solid black",
        width: "90%",
        margin: "auto",
        fontFamily: 'JetBrains Mono',
        fontSize: "1.5em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2em",
        }
    },
    itemDetalle:{
        display: "flex",
        padding: "10px 5px",
    },
    fontBolder: {
        fontWeight: "bold"
    },
    titulo:{
        margin: "0px",
        paddingTop: "10px",
        fontFamily: "Coda",
        textAlign: "center",
        fontWeight: "bold",
        color: "#8D0A0A",
        textTransform: "uppercase"
    },
    subtitulo: {
        fontFamily: "Bebas Neue",
        textTransform: "uppercase",
        '& h2': {
            margin: "0px 5px"
        }
    },
    imagen: {
        width: "60px",
        height: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "10px"
    },
    celdaGrid:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& p": {
            fontSize: "0.8em"
        }
    },
    celdaDerecha: {
        marginLeft: "auto",
    },
    itemTitulo: {
        fontSize: "1em",
        margin: 0,
    },
    cantidad:{
        display: "flex",
        alignItems: "flex-end"
    },
    deleteButton: {
        color: "#FF5946",
        border: "2px #FF5946 solid",
        borderRadius: "10px 0px 0px 10px",
        backgroundColor: "white",
        fontFamily: "Montserrat",
        padding: 2,
        textTransform: "none",
        "&:hover": {
            backgroundColor: "#FF5946",
            color: "white"
        }
    },
    backIcon:{
        fontSize: "1rem",
        marginLeft: "5px"
    },
    precioTotal:{
        fontFamily: "Bebas Neue",
        padding: 5,
        fontSize: "1.7em",
        color: "#8F0B0B"
    },
    bottomLine:{
        height: "1px",
        backgroundColor: "#e9787863",
        maxWidth: "90%",
        width: "100%",
        margin: "auto"
    },
    sinItemsContainer:{
        textAlign: "center"
    },
    continuarLink:  {
        textDecoration: "none",
        borderRadius: 50,
        fontFamily: "Bebas Neue",
        padding: "5px 10px",
        color: "#C30038",
        fontSize: "3em",
        border: "2px solid",
        borderColor: "#C30038",
        boxShadow: "0px 4px 5px 1px rgb(0 0 0 / 25%)",
        background: "white",
        animation: "heartbeat 1.5s ease-in-out infinite both",
        '&:hover':{
            background: "#C30038",
            color: "white",
            cursor: "pointer",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2em",
        }  
    },
    clearButton:{
        marginTop: 10,
        color: "white",
        fontSize: "0.7em",
        borderTop: "2px solid red",
        borderBottom: "2px solid red",
        '&:hover': {
            border: "2px solid red"
        }
    }
}));

export default useStyles;