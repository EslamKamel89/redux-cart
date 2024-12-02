import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart-slice";
import uiSliceReducer from "./ui-slice";
const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: cartReducer,
  },
});
export default store;
