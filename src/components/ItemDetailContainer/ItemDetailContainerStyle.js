import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    divContainer: {
        width: "90%",
        margin: "auto"
    },
    notFoundMensaje:{
        fontFamily: "Coda",
        textAlign: "center",
        fontWeight: "bold",
        color: "#8D0A0A"
    },
    spinnerContainer: {
        textAlign: "center",
        margin: "20px auto"
    },
    spinner: {
        color: "red"
    }
});

export default useStyles;