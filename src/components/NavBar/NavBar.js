import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SportsMmaRoundedIcon from '@material-ui/icons/SportsMmaRounded';
import { CartWidget } from '../CartWidget/CartWidget';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontFamily: 'Bungee Inline',
        fontSize: "1.5em",
        flexGrow: 1,
    },
    navStyle: {
        background: "linear-gradient(90deg, rgba(250,0,0,1) 0%, rgba(0,0,0,1) 100%)"
        /*
        backgroundColor: "#AF1010"*/
    },
    buttons: {
        fontFamily: 'Bebas Neue',
        fontSize: "1.1em"
    }
}));

//Nombre de la marca
const brandTitle = "Cage Sports";

export default function NavBar() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navStyle}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SportsMmaRoundedIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {brandTitle}
                    </Typography>
                    <Button color="inherit" className={classes.buttons}>Login</Button>
                    <Button color="inherit" className={classes.buttons}>Productos</Button>
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </div>
    );
}
