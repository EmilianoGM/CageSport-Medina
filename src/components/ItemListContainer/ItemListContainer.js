import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemListContainer = () => {
    return (
        <div>
            <h1>CAGE SPORTS HOME</h1>
            <ItemCount stock={3} initial={0}  ></ItemCount>
        </div>
    );
}