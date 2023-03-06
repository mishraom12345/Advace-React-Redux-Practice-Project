import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:[],
  totalQuantity:0,
  totalAmount:0
}

const cartSlice = createSlice({
  name:'cart',
  initialState:initialState,
  reducers:{
    addTocart(state,action){
      const newitem = action.payload
      const existingitem = state.items.find(item=>item.id===newitem.id)
      state.totalQuantity++
      if(!existingitem){
          state.items.push({id:newitem.id,price:newitem.price,quantity:1,totalprice:newitem.price,name:newitem.title})
      }else{
        existingitem.quantity++
        existingitem.totalprice = existingitem.price+ newitem.price
      }
    },

    removeFromcart(state,action){
        const id = action.payload
        const existingitem = state.items.find(item=>item.id===id)
        state.totalQuantity--

        if(existingitem.quantity ===1){
          state.items = state.items.filter(item=>item.id != id)

        }else{
          existingitem.quantity--
          //existingitem.totalprice = existingitem.totalprice-existingitem.price

        }
    }
  }
})

export const cartAction = cartSlice.actions
export default cartSlice