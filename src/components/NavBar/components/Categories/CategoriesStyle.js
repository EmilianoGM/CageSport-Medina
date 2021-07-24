import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dropdown: {
        position: "relative",
        display: "inline-block",
        '&:hover': {
            display: "block",
            '& div':{
                display:"block"
            }
        }
    },
    dropdownContent: {
        //display: "block",
        display: "none",
        position: "absolute",
        padding: "5px",
        backgroundColor: "#780000",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        zIndex: "1"
    },
    categoriasButton: {
        padding: "0px 8px",
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
        display: 'block',
        textTransform: 'capitalize',
        fontFamily: 'Bebas Neue',
        fontSize: "1.2em",
        margin: "5px",
        color: "white",
        textDecoration: "none",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1em",
        },
    },
    activeCustomLink: {
        color: "#949494"
    }
}));

export default useStyles;