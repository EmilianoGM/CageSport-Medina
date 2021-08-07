import React, {createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {
    const [itemsCompraArray, setItemsCompraArray] = useState([]); //Array de items en el carrito de compra.

    /**
     * Comprueba la data de Session Storage y de existir la asigna al array de compra.
     */
    const setArrayDataFromSession = () => {
        const stringJsonData = sessionStorage.getItem("cartData");
        if(stringJsonData){
            const arrayData = JSON.parse(stringJsonData);
            if(arrayData.length !== 0){
                setItemsCompraArray(arrayData);
            } 
        }
    }

    /**
     * Guarda los datos del array de compra en Session Storage, en formato JSON.
     */
    const setSessionStorage = () => {
        const arrayDataString = JSON.stringify(itemsCompraArray);
        sessionStorage.setItem("cartData", arrayDataString);
    }

    /**
     * Agrega un item al array de compra, si ya se encuentra suma la cantidad al mismo.
     * @param {*} item Item a agregar.
     * @param {*} quantity Cantidad del item.
     */
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            removeItemById(item.id);
        }
        setItemsCompraArray(itemsCompraArray => [...itemsCompraArray, {item: item, quantity: quantity}]);
    }

    /**
     * Retorna si se encuentra un item en el array de compra del carrito.
     * @param {*} id El id del item a buscar.
     * @returns True si se encuentra el item, false en caso contrario.
     */
     const isInCart = (id) => {
        return itemsCompraArray.find(element => element.item.id === id) === undefined ? false : true;
    }

    /**
     * Remueve un item del array de compra comparando el id del item.
     * @param {*} itemId Id del item a remover.
     */
    const removeItemById = (itemId) => {
        const arrayABuscar = [...itemsCompraArray];
        const index = arrayABuscar.findIndex(element => element.item.id === itemId);
        removeItemByIndex(index);
    }
    
    /**
     * Remueve un item del array de compra por el indice.
     * @param {*} index Indice del item a remover.
     */
    const removeItemByIndex = (index) => {
        const nuevoArrayCompra = [...itemsCompraArray].slice(0,index).concat([...itemsCompraArray].slice(index + 1));

        setItemsCompraArray(nuevoArrayCompra);
    }

    /**
     * Elimina todos los items del array de compra.
     */
    const clearCart = () => {
        setItemsCompraArray([]);
    }

    /**
     * Suma la cantidad total de items pedidos en el array de compra.
     * @returns La cantidad total (number)
     */
    const getTotalQuantity = () => {
        const cantidadTotal = itemsCompraArray.map((itemCompra) => { return itemCompra.quantity})
                              .reduce((acc, curr) => acc + curr, 0);
        return cantidadTotal;
    }

    /**
     * Suma el precio total de items pedidos en el array de compra.
     * @returns El precio total (number)
     */
    const getTotalPrice = () => {
        const totalPrice = itemsCompraArray.map((itemCompra) => { return itemCompra.quantity * itemCompra.item.precio})
                            .reduce((acc,curr) => acc + curr, 0);
        return totalPrice;
    }

    useEffect(setArrayDataFromSession, []);
    useEffect(setSessionStorage, [itemsCompraArray]);

    return <CartContext.Provider value={{ itemsCompraArray, addItem, removeItemById, removeItemByIndex, clearCart, getTotalQuantity, getTotalPrice}}>
        {props.children}
    </CartContext.Provider>
}