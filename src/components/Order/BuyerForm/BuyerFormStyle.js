import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    customForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        textAlign: 'center',
        fontSize: '0.6em',
        color: 'red'
    },
    customInput:{
        width: '100%'
    },
    actionsContainer: {
        marginTop: '10px'
    },
    totalContainer: {
        display: 'flex',
    },
    total: {
        fontSize: "1.5em",
        fontFamily: "Bebas Neue",
        margin: 'auto 0px'
    },
    submitContainer: {
        textAlign: "right"
    },
    submmitButton: {
        fontSize: "1.2em",
        backgroundColor: "white",
        padding: 5,
        fontFamily: "Bebas Neue",
        border: "5px solid #95273D",
        '&:hover': {
            borderColor: "white",
            color: "white",
            backgroundColor: "#FF5F5F"
        }
    }    
}));

export default useStyles;