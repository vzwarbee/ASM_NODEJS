import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { configLS } from '../../utils/configHeader'

const createProduct = async (product) => {
    const response = await axios.post(`${base_url}product/`, product, configLS);

    return response.data;
}

const getProducts = async () => {
    const response = await axios.get(`${base_url}product/`);

    return response.data;
}

const productService = {
    getProducts,
    createProduct,
}

export default productService;