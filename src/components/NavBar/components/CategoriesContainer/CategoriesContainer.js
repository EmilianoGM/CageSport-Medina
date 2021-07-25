import React, {useState, useEffect} from 'react';
import { getCategories } from '../../../../services/CloudFirestoreService';
import { Categories } from '../Categories/Categories';

export const CategoriesContainer = props => {
    const [categoriesArray, setCategoriesArray] = useState([]);
    
    const getCategoriesData = () => {
        getCategories().then((querySnapshot) => {
            const newCategoriesArray = [];
            querySnapshot.forEach((doc) => {
                const name = doc.data().name;
                newCategoriesArray.push(name);
            });
            setCategoriesArray(newCategoriesArray);
        }).catch(() => {
            setCategoriesArray([]);
        });
    }

    useEffect(getCategoriesData, []);

    return (
        <Categories categoriesArray={categoriesArray} />
    );
}