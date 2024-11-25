import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boatItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.boatItems.find((item) => item.id === newItem.id);
      // Thêm sản phẩm mới
      if (!existingItem) {
        state.boatItems.push({
          id: newItem.id,
          title: newItem.title,
          price: parseFloat(newItem.price),
          max: newItem.max,
          size: newItem.size,
          image: newItem.image,
          quantity: 1,
          totalPrice: parseFloat(newItem.price),
        });
      } else {
        // Tăng số lượng sản phẩm hiện tại
        existingItem.quantity++;
        // Tổng số lượng của mỗi sản phẩm
        existingItem.totalPrice = parseFloat(existingItem.totalPrice) + parseFloat(newItem.price);
      }
      // Cập nhật tổng số lượng
      state.totalQuantity++;
      // Cập nhật tổng giá trị giỏ hàng
      state.totalAmount = state.boatItems.reduce((total, item) => total + item.totalPrice, 0);
    },
    // vừa giảm số lượng
    minusItem(state, action) {
      const minusItem = action.payload;
      const existingItem = state.boatItems.find((item) => item.id === minusItem.id);
      state.totalQuantity--;
      // Nếu không tìm thấy sản phẩm và số lượng
      if (!existingItem || existingItem.quantity === 0) {
        return;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= Number(existingItem.price);
      }
      // Cập nhật tổng giá trị giỏ hàng
      state.totalAmount = state.boatItems.reduce((total, item) => total + item.totalPrice, 0);
    },
    // vừa giảm số lượng và xóa item khi chỉ còn 1 items
    removeItem(state, action) {
      const minusItem = action.payload;
      const existingItem = state.boatItems.find((item) => item.id === minusItem.id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.boatItems = state.boatItems.filter((item) => item.id !== minusItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= Number(existingItem.price);
      }
      state.totalAmount = state.boatItems.reduce((total, item) => total + item.totalPrice, 0);
    },
    resetItem(state, action) {
      state.boatItems = [];
      state.totalAmount = 0;
      state.totalAmount = 0;
    },
    deleteItem(state, action) {},
  },
});
// cartSlice.actions sử dụng để trung gian lấy hàm ở trên
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
