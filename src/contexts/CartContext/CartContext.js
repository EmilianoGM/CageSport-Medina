import React, {createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {
    const [itemsCompraArray, setItemsCompraArray] = useState([]); //Array de items en el carrito de compra.

    /**
     * Agrega un item al array de compra, si ya se encuentra suma la cantidad al mismo.
     * @param {*} item Item a agregar.
     * @param {*} quantity Cantidad del item.
     */
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            modifyQuantity(item.id, quantity);
        } else {
            setItemsCompraArray(itemsCompraArray => [...itemsCompraArray, {item: item, quantity: quantity}]);
        }
    }

    /**
     * Modifica la cantidad de un item en el array de compra, adicionando o restando dicha cantidad. Si el resultado de la cantidad del item es cero, elimina el item.
     * @param {*} itemId El id del item a buscar.
     * @param {*} quantity Cantidad a agregar (positiva) o restar (negativa).
     */
     const modifyQuantity = (itemId, quantity) => {
        let nuevoArrayCompra = [...itemsCompraArray];
        let index = nuevoArrayCompra.findIndex(element => element.item.id === itemId);
        let itemAModificar = nuevoArrayCompra[index];
        itemAModificar.quantity += quantity;
        if(itemAModificar.quantity <= 0){
            removeItemByIndex(index);
        } else {
            nuevoArrayCompra[index] = itemAModificar;
            setItemsCompraArray(nuevoArrayCompra);
        }
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
        if(isInCart(itemId)){
            let arrayABuscar = [...itemsCompraArray];
            let index = arrayABuscar.findIndex(element => element.item.id === itemId);
            removeItemByIndex(index);
        }
    }
    
    /**
     * Remueve un item del array de compra por el indice.
     * @param {*} index Indice del item a remover.
     */
    const removeItemByIndex = (index) => {
        let nuevoArrayCompra = [...itemsCompraArray];
        nuevoArrayCompra.splice(index, 1);
        setItemsCompraArray(nuevoArrayCompra);
    }

    /**
     * Elimina todos los items del array de compra.
     */
    const clearCart = () => {
        setItemsCompraArray([]);
    }
    
    return <CartContext.Provider value={{ itemsCompraArray, addItem, modifyQuantity, removeItemById, removeItemByIndex, clearCart }}>
        {props.children}
    </CartContext.Provider>
}