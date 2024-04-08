import { configureStore } from "@reduxjs/toolkit";
import productreducer from './slice/ProductSlice'
import WishlistReducer from './slice/Wishlistslice'
import CartReducer from './slice/Cartslice'
export const ProductStore = configureStore({


    reducer:{

        productreducer,
        WishlistReducer,
        CartReducer

    }

})

export default ProductStore