import axios from "axios";

const BASE_URL = 'http://fakestoreapi.com'

export const getAllProducts = async () =>{

    const response = await axios.get(`${BASE_URL}/products`)

    return response.data;
}

export const getProductsById = async (id) =>{

    const response = await axios.get(`${BASE_URL}/products/${id}`)

    return response.data;
}

export const getProductImage = async (id) =>{

    const response = await axios.get(`${BASE_URL}/products/${id}`)

    return response.data;
}

//We have created functionalities needed for our project

