import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        add(state, action){
            state.push(action.payload)
        }
    }
})

export const {add} = CartSlice.actions
export default CartSlice.reducer