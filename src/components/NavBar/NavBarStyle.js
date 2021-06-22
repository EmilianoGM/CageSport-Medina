import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    brandTitle:{
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            fontSize: "0.8em",
        }  
    },
    title: {
        fontFamily: 'Bungee Inline',
        fontSize: "1.5em",
        textDecoration: "none",
        color: "white"
    },
    navStyle: {
        background: "linear-gradient(90deg, rgba(250,0,0,1) 0%, rgba(0,0,0,1) 100%)"
    },
    customLink: {
        fontFamily: 'Bebas Neue',
        fontSize: "1.2em",
        margin: "0px 5px",
        color: "white",
        textDecoration: "none",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1em",
        } 
    },
    activeCustomLink: {
        color: "#C7C7C7"
    }
}));

export default useStyles;