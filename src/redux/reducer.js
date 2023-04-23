import {createReducer} from '@reduxjs/toolkit'


const crtItems = localStorage.getItem('crtItems') !== null ? 
    JSON.parse(localStorage.getItem('crtItems')) : [];

const subtotal = localStorage.getItem('subtotal') !== null ? 
    JSON.parse(localStorage.getItem('subtotal')) : 0;

const shippingcharge = localStorage.getItem('shippingcharge') !== null ? 
    JSON.parse(localStorage.getItem('shippingcharge')) : 0;

const tax = localStorage.getItem('tax') !== null ? 
    JSON.parse(localStorage.getItem('tax')) : 0;

const total = localStorage.getItem('total') !== null ? 
    JSON.parse(localStorage.getItem('total')) : 0;

 export const cartReducer = createReducer({
    crtItems: crtItems,
    subtotal: subtotal,
    shippingcharge: shippingcharge,
    tax: tax,
    total: total
    ,
},{ 
    addToCart: (state, action) =>{
        const items = action.payload
        const isitemexist = state.crtItems.some(i=>i.id===items.id)
        if (isitemexist)
        {
            state.crtItems.forEach(i=>{
                if(i.id===items.id)
                i.quantity +=1

            })
        }
        else{
            state.crtItems.push(items)
        }
        localStorage.setItem('crtItems', JSON.stringify(state.crtItems.map(item=>item)))
    },
    
    decreament: (state, action)=>{
        
        const items = state.crtItems.find(i=>i.id===action.payload)
        if (items.quantity> 1)
        {
            state.crtItems.forEach(i=>{
                if(i.id===items.id)
                i.quantity -=1

            })
        }
        localStorage.setItem('crtItems', JSON.stringify(state.crtItems.map(item=>item)))
    },
    dlthandler: (state, action)=>{
     state.crtItems= state.crtItems.filter(i=>i.id!==action.payload);
        localStorage.setItem('crtItems', JSON.stringify(state.crtItems.map(item=>item)))
        
    },
    calculatePrice:(state)=>{
        let sum = 0
        state.crtItems.forEach(i=>{
            sum += i.price * i.quantity
            return sum
         } )
        state.subtotal = sum
        // state.crtItems.forEach(i=>sum += (i.price * i.quantity) )
        // state.subtotal = sum

        state.shippingcharge = state.subtotal >10000 ? 0 : 200
        state.tax = +(state.subtotal *.18).toFixed()
        state.total = state.subtotal + state.tax + state.shippingcharge

        localStorage.setItem('subtotal', JSON.stringify(state.subtotal))
        localStorage.setItem('shippingcharge', JSON.stringify(state.shippingcharge))
        localStorage.setItem('tax', JSON.stringify(state.tax))
        localStorage.setItem('total', JSON.stringify(state.total))
        
    },

});




