import axios from 'axios'
import { base_url, configLS } from '../../utils/axiosConfig'

const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {

        return response.data
    }

}

const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData);
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data
}
const logout = async () => {
    const response = await axios.get(`${base_url}user/logout`,);
    if (response.data) {
    }
    return response.data
}
const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, configLS);
    if (response.data) {
    }
    return response.data


}

const userService = {
    register,
    login,
    getUserWishlist,
    logout
}

export default userService;