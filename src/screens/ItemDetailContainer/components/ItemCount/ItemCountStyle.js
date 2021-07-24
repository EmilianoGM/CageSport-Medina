import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    countContainer: {
        width: "60%",
        margin: "auto",
    },
    contador: {
        textAlign: "center",
        border: "4px solid #888888",
        borderRadius: "10px",
        backgroundColor: "#f4f5f6",
        margin: "5px 0px",
        color: "black"
    },
    buttonCustomizado: {
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
        }
    },
    rightButtonContainer:{
        textAlign: "right"
    },
    buttonCarrito: {
        width: "100%",
        color: "#8F0B0B",
        fontFamily: 'Bebas Neue',
        fontSize: "1.2em"
    }
}));

export default useStyles;