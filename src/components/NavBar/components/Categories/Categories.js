import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './CategoriesStyle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const Categories = props => {
    const classes = useStyles();
    const { categoriesArray } = props;

    return (
        <div className={classes.dropdown}>
            <Button className={classes.categoriasButton}>Categorias<ArrowDropDownIcon /></Button>
            <div className={classes.dropdownContent}>
                {categoriesArray.map((category, i) => {
                    return (
                        <NavLink key={i} activeClassName={classes.activeCustomLink} className={classes.customLink} to={`/category/${category}`}>
                            {category}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}