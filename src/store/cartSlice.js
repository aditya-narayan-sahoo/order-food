import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = action.payload; // Expecting the index of the item to remove
      if (index > -1) {
        state.items.splice(index, 1); // Remove the item at the specified index
      }
    },
    clearCart: () => {
      return { items: [] }; // or we can use : state.items.length = 0
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
