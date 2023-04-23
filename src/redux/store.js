import {configureStore} from '@reduxjs/toolkit'
import {cartReducer} from './reducer.js'

   const store = configureStore({
    reducer:{
        cart:cartReducer,
    },
})

export default store;