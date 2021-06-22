import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tituloList:{
        fontFamily: "Coda",
        textAlign: "center",
        fontWeight: "bold",
        color: "#8D0A0A",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.1em",
        }  
    },
    spinnerContainer: {
        textAlign: "center",
        margin: "20px auto"
    },
    spinner: {
        color: "red"
    }
}));

export default useStyles;