import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Api call to get the products 
export const fetchproductThunk = createAsyncThunk('products/fetchproductThunk', async () => {

    const response = await axios.get('https://dummyjson.com/products')

    localStorage.setItem("response", JSON.stringify(response.data.products))
    return response.data.products

})


const productslice = createSlice({

    name: 'products',
    initialState: {
        product: [],
        loading: false,
        error: '',

    },

    reducers: {

        Serach: (state, action) => {

            state.product = action.payload

        }

    },

    extraReducers: (bulider) => {

        bulider.addCase(fetchproductThunk.pending, (state, action) => {

            state.loading = true

        }),
            bulider.addCase(fetchproductThunk.fulfilled, (state, action) => {

                state.loading = false
                state.product = action.payload

            }),
            bulider.addCase(fetchproductThunk.rejected, (state, action) => {

                state.loading = false
                state.product = []
                state.error = "REQUEST FAILED"

            })

    }


})

export default productslice.reducer
export const { Serach } = productslice.actions