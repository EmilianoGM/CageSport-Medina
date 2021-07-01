import { database } from "./Firebase";
const productosCollection = database.collection("productos");

/**
 * Devuelve una promise con la data de productos de firebase filtrada segun categoria, en tipo QuerySnapshot<firebase.firestore.DocumentData>.
 * @param {*} categoryId La categoria de tipo string.
 * @returns Promise.
 */
export const getProductos = (categoryId) => {
    if(categoryId !== undefined && categoryId !== null){
        return productosCollection.where('categoria', '==', categoryId).get();
    } else {
        return productosCollection.get();
    }
};

/**
 * Devuelve una promesa con un producto filtrado por id.
 * @param {*} id Id de tipo string.
 * @returns Promise.
 */
export const getProductoById = (id) => {
    return productosCollection.doc(id).get();
}