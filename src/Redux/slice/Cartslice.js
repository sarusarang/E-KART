import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";



// Cart function
const Cartslice = createSlice({


    name:'cart',
    initialState:[],
    reducers:{

        addTocart:(state,action)=>{

            const existingProduct = state.find(item=>item.id == action.payload.id)

            if(existingProduct){

                state = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                state.push(existingProduct)
            }else{

                state.push({...action.payload,quantity:1})
            }
            toast.success("ITEM ADDED TO CART")

        },

        removeFromcart:(state,action)=>{

          return  state=state.filter(item=>item.id!=action.payload)

        },
        emptyCart:(state)=>{

            state=[]
            return state
        }

    }

})

export default Cartslice.reducer
export const {addTocart,removeFromcart,emptyCart} = Cartslice.actions