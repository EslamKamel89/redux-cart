import { createSlice } from "@reduxjs/toolkit";
const initalState = {
  items: [],
  totalQuantity: 0,
};
createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id == newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItemToCart(state, action) {},
  },
});
