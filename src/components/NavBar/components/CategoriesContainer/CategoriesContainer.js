import React, {useState, useEffect} from 'react';
import { getCategories } from '../../../../services/CloudFirestoreService';
import { Categories } from '../Categories/Categories';

export const CategoriesContainer = props => {
    const [categoriesArray, setCategoriesArray] = useState([]);
    
    const getCategoriesData = () => {
        getCategories().then((querySnapshot) => {
            const newCategoriesArray = querySnapshot.docs.map((doc) => {
                return doc.data().name;
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