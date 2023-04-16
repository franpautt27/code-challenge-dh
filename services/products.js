import api from './api';

export async function getProducts(){
    try {
        const products = await api.get("/products")
        return products.data
    } catch (err) {
        new Error("Couldn't get products")
    }
}