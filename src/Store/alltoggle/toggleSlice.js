import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggleUI",
  initialState: { roomIsVisible: false, cartIsVisible: false },

  reducers: {
    toggleRoom(state) {
      state.roomIsVisible = !state.roomIsVisible;
    },
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
