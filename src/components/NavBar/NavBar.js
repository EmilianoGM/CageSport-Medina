import React from 'react';
import { CategoriesContainer } from './components/CategoriesContainer/CategoriesContainer';
import { CartWidget } from './components/CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './NavBarStyle';

//Nombre de la marca
const brandTitle = "Cage Sports";
const abbreviation = "CS";
/**
 * Muestra una barra de navegación al usuario junto con la marca y un CartWidget. 
 */
export default function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navStyle}>
                <Toolbar>
                    <Typography variant="h6" className={classes.brandTitle}>
                        <Link className={classes.title} to={'/'}>{matches ? abbreviation : brandTitle}</Link>
                    </Typography>
                    <CategoriesContainer />   
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </div>
    );
}
