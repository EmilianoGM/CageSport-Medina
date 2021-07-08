import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    customDialog:{
        width: '70%'
    },
    dialogTitle: {
        fontFamily: "Bebas Neue",
        color: '#95273D',
        fontSize: '1.5em'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: 'white',
        backgroundColor: '#FFBCBC',
        '&:hover': {
            color: '#E61A1A',
            backgroundColor : '#D2D2D2'
        }
    },
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
    spinnerContainer: {
        textAlign: "center",
        margin: "20px auto"
    },
    spinner: {
        color: "red"
    }
}));

export default useStyles;