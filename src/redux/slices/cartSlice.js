import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    totalQty:0,
    totalAmt:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);

            state.totalQty++;

            if(!existingItem)
            {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
                
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmt = state.cartItems.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0);
        },

        deleteItem: (state,action) => {
            const delItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === delItem.id);

            state.totalQty--;

            if(existingItem.quantity > 1){
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice - existingItem.price;
            }
            else
                {
                    state.cartItems = state.cartItems.filter((item) => item.id !== existingItem.id);
                }

            state.totalAmt = state.cartItems.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0);
        }
    }
})

export default cartSlice.reducer;
export const { addItem,deleteItem } = cartSlice.actions; 