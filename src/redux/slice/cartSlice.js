import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { list: [], total: 0 },
    reducers: {
        addToCart(state, action) {
            const check = state.list.findIndex(book => book.id === action.payload.id)
            if (check !== -1) {
                state.list[check].quantity += action.payload.quantity 
            } else {
                state.list.push(action.payload)
            }
        }
    }
})

const { actions, reducer } = cartSlice

export const { addToCart  } = actions

export default reducer