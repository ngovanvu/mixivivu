import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggleUI",
  initialState: {
    roomIsVisible: false,
    currentRoomId: null, // Thêm trạng thái lưu ID phòng hiện tại
    cartIsVisible: false,
  },

  reducers: {
    toggleRoom(state, action) {
      const roomId = action.payload?.id; // Nhận ID từ action payload
      if (state.currentRoomId === roomId) {
        // Nếu nhấp vào cùng một phòng, toggle hiển thị
        state.roomIsVisible = !state.roomIsVisible;
        if (!state.roomIsVisible) state.currentRoomId = null;
      } else {
        // Hiển thị modal cho phòng khác
        state.roomIsVisible = true;
        state.currentRoomId = roomId;
      }
    },
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
