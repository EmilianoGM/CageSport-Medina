import React from 'react';
import {Item} from '../Item/Item';
import Grid from '@material-ui/core/Grid';

/**
 * Agrupa Items en un grilla ordenada para la vista del usuario
 * @param {*} param0 Array de items a mostrar
 * @returns Grilla de items
 */
export const ItemList = ( {items} ) => {
    return(
        <Grid className="scale-in-top" container direction="row" justify="space-evenly" alignItems="stretch" >
            { items.map((element, i) => {
                return (
                    <Item item={element} key={element.id} />
                );
            })}
        </Grid>
    );
}