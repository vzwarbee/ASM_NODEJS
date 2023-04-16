import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'
import { toast } from 'react-toastify';



export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {

        return await userService.register(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        return await userService.login(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const logoutUser = createAsyncThunk('auth/logout', async (thunkAPI) => {
    try {
        return await userService.logout()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const getWishlist = createAsyncThunk('auth/wishlist', async (thunkAPI) => {
    try {
        return await userService.getUserWishlist()
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
const getCustomerFromLocalStorage = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;

const initialState = {
    user: getCustomerFromLocalStorage,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.createdUser = action.payload
            if (state.isSuccess === true) {
                toast.info("Đăng ký thành công")
            }
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
            if (state.isError === true) {
                toast.error("Có gì đó lỗi trong lúc đăng ký")
            }
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.user = action.payload
            if (state.isSuccess === true) {
                localStorage.setItem("token", action.payload.token)
                toast.info("Đăng nhập thành công")
            }
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
            if (state.isError === true) {
                toast.error(action.error)
            }
        }).addCase(getWishlist.pending, (state) => {
            state.isLoading = false
        }).addCase(getWishlist.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.wishlists = action.payload
        }).addCase(getWishlist.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        }).addCase(logoutUser.pending, (state) => {
            state.isLoading = true
        }).addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.user = action.payload
            if (state.isSuccess === true) {
                toast.success("Đã đăng xuất")
            }
        }).addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
            if (state.isError === true) {
                toast.error("Có gì đó lỗi")
            }
        })

    }

});

export default authSlice.reducer