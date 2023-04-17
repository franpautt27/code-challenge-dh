import api from './api';

export async function getProducts(){
    try {
        const products = await api.get("/product")
        return products.data
    } catch (err) {
        throw new Error(err.message)
    }
}