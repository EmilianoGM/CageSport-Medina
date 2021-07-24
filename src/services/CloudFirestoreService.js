import { database, docIdFieldPath } from "./Firebase";

const productosCollection = database.collection("productos");
const ordersCollection = database.collection("orders");
const categoriesCollection = database.collection("categories");

/**
 * Devuelve una promise con la data de productos de firebase filtrada segun categoria, en tipo QuerySnapshot<firebase.firestore.DocumentData>.
 * @param {*} categoryId La categoria de tipo string.
 * @returns Promise.
 */
const getProductos = (categoryId) => {
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
const getProductoById = (id) => {
    return productosCollection.doc(id).get();
}

/**
 * Devuelve una promesa con la coleccion de categorias.
 * @returns Promise
 */
const getCategories = () => {
    return categoriesCollection.get();
}

/**
 * Devuelve una promesa con los productos que coinciden con el array recibido.
 * @param {*} items Array de items
 * @returns Promise.
 */
const getProductosByCartArray = (items) => {
    return productosCollection.where(docIdFieldPath, 'in', items.map(i => i.item.id)).get();
}

/**
 * Devuelve un batch de firebase
 * @returns WriteBatch.
 */
const getBatch = () => { return database.batch()};

/**
 * Devuelve una nueva referencia de un documento a agregar en la coleccion de ordenes.
 * @returns DocumentReference instance.
 */
const getNewOrderReference = () => {
    return ordersCollection.doc();
}

export {getProductos, getProductoById, getCategories, getProductosByCartArray, getBatch, getNewOrderReference};