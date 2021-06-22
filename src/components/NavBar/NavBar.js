import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import SportsMmaRoundedIcon from '@material-ui/icons/SportsMmaRounded';
import useStyles from './NavBarStyle';

//Nombre de la marca
const brandTitle = "Cage Sports";
// ID categorias
const indumentaria = "indumentaria";
const equipamiento = "equipamiento";

/**
 * Muestra una barra de navegación al usuario junto con la marca y un CartWidget. 
 */
export default function NavBar() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navStyle}>
                <Toolbar>
                    <Typography variant="h6" className={classes.brandTitle}>
                        <Link className={classes.title} to={'/'}><SportsMmaRoundedIcon/>{brandTitle}</Link>
                    </Typography>
                    <NavLink activeClassName={classes.activeCustomLink} className={classes.customLink} to={'/category/' + equipamiento}>Equipamiento</NavLink>
                    <NavLink activeClassName={classes.activeCustomLink} className={classes.customLink} to={'/category/' + indumentaria}>Indumentaria</NavLink>
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </div>
    );
}
