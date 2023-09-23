import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Slice/Slice' 
import cartReducer from '../Slice/cartSlice'

export const store = configureStore({
    reducer : {
        userData : userReducer,
        cartData : cartReducer
    },
})
