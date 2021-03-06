import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal:{
        position: "fixed",
        zIndex: 1000,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        margin: "15% auto",
        padding: 10,
        borderRadius: 5,
        width: "90%",
        backgroundColor: "white",
    },
    show: {
        display: 'block'
    },
    hide: {
        display: 'none'
    },
    modalHeader: {
        padding: 10
    },
    modalBody:{
        padding: 10
    },
    dialogTitle: {
        margin: 0,
        fontFamily: "Bebas Neue",
        color: '#95273D',
        fontSize: '1.7em',
        fontWeight: "normal",
        textAlign: "left"
    },
    closeButton: {
        float: "right",
        color: 'white',
        backgroundColor: '#FFBCBC',
        '&:hover': {
            color: '#E61A1A',
            backgroundColor : '#D2D2D2'
        }
    }
}));

export default useStyles;