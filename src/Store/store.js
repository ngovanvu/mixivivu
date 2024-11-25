import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./boatroom/cartSlice";
import toggleSlice from "./alltoggle/toggleSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    toggle: toggleSlice,
  },
});
export default store;
