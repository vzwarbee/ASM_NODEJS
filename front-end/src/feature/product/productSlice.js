import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productService from './productService'
import { toast } from 'react-toastify';



export const getAllProducts = createAsyncThunk('product/get', async (thunkAPI) => {
    try {
        return await productService.getProducts();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});
export const addToWishlist = createAsyncThunk('product/wishlist', async (prodId, thunkAPI) => {
    try {
        return await productService.addToWishlist(prodId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getOneProduct = createAsyncThunk('product/get-product', async (id, thunkAPI) => {
    try {
        return await productService.getProductDetail(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});
export const addComment = createAsyncThunk('product/rating', async (prodId, thunkAPI) => {
    try {
        return await productService.addProductComment(prodId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});




const initialState = {
    products: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}
export const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.products = action.payload;
        }).addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        }).addCase(addToWishlist.pending, (state) => {
            state.isLoading = true;
        }).addCase(addToWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.wishlist = action.payload;
        }).addCase(addToWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            if (state.isError === true) {
                toast.success(action.error)
            }
        }).addCase(getOneProduct.pending, (state) => {
            state.isLoading = true;
        }).addCase(getOneProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.productDetail = action.payload;
        }).addCase(getOneProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        }).addCase(addComment.pending, (state,) => {
            state.isLoading = true;
        }).addCase(addComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.productDetail = action.payload;
        }).addCase(addComment.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    },
})

export default productSlice.reducer;
