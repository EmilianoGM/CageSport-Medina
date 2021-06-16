import React from 'react';
import {Item} from '../Item/Item';
import Grid from '@material-ui/core/Grid';

export const ItemList = ( {items} ) => {
    return(
        <div>
            <Grid container direction="row" justify="space-evenly" alignItems="center">
            { items.map((element, i) => {
                return (
                        <Item item={element} key={i}></Item>
                );
            })}
            </Grid>
        </div>
    );
}