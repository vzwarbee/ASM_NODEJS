import axios from 'axios';
import { base_url } from '../../utils/axiosConfig';

const getProdCategorys = async () => {
    const response = await axios.get(`${base_url}prodCategory/`);

    return response.data;
};

const prodCateService = {
    getProdCategorys,
}

export default prodCateService;