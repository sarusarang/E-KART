import { createSlice } from "@reduxjs/toolkit";


const Wishslice = createSlice({


    name: "Wishlist",
    initialState: {

        Wishlist: []

    },
    reducers: {

        addtoWishList: (state, action) => {

            const existingproduct = state.Wishlist.find(item => item.id == action.payload.id)
            if (existingproduct) {

                alert("Product Alredy Existing In Wishlist")

            } else {

                state.Wishlist.push(action.payload)
                alert("Product Added to Wishlist Success fully")

            }
        },
        removefromwishlist: (state, action) => {

            state.Wishlist = state.Wishlist.filter(item => item.id != action.payload)
            alert("PRODUCT REMOVED SUCCESS FULLY")

        }

    }

})

export const { addtoWishList, removefromwishlist } = Wishslice.actions
export default Wishslice.reducer