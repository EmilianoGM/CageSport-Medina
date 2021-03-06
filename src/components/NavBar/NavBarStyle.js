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
    },
    title: {
        fontFamily: 'Bungee Inline',
        fontSize: "1.5em",
        textDecoration: "none",
        color: "white",
    },
    navStyle: {
        background: "linear-gradient(90deg, rgba(250,0,0,1) 0%, rgba(0,0,0,1) 100%)"
    },
    categoriasButton: {
        color: "white",
        fontFamily: 'Bebas Neue',
        fontSize: "1.2em",
    },
    menu:{
        "& .MuiPaper-root": {
            backgroundColor: "#780000"
          }
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
        color: "#949494"
    }
}));

export default useStyles;