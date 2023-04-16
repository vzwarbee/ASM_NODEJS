import axios from 'axios';
import { base_url, configLS } from '../../utils/axiosConfig';


const getProducts = async () => {
    const response = await axios.get(`${base_url}product`);

    if (response.data) {
        return response.data;
    }
}
const getProductDetail = async (id) => {
    const response = await axios.get(`${base_url}product/${id}`);

    if (response.data) {
        return response.data;
    }
}
const addToWishlist = async (prodId) => {
    const response = await axios.put(`${base_url}product/wishlist`, { prodId }, configLS);
    if (response.data) {
        return response.data;
    }
}
const addProductComment = async (prodId) => {
    const response = await axios.put(`${base_url}product/rating/`, prodId, configLS);
    if (response.data) {
        console.log(JSON.stringify(response));
        return response.data;
    }
}

const productService = {
    getProducts,
    addToWishlist,
    getProductDetail,
    addProductComment,
}

export default productService;