import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pagarButton: {
        fontSize: "2.2em",
        marginTop: 20,
        backgroundColor: "white",
        padding: 5,
        fontFamily: "Bebas Neue",
        border: "5px solid #95273D",
        '&:hover': {
            borderColor: "white",
            color: "white",
            backgroundColor: "#FF5F5F"
        }
    },
    arrowIcon:{
        marginLeft: "30px",
        fontSize: "1.7em",
        color: "#95273D"
    },
    lista: {
        margin: '20px 10px',
        textAlign: "left"
    }
}));

export default useStyles;