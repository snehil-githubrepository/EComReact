import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          // If quantity is more than 1, decrement
          existingItem.quantity -= 1;
        } else if (state.items.length === 1) {
          // If only one item in cart, clear the cart
          state.items = [];
        } else {
          // If multiple items but quantity is 1, remove the item
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      } else {
        // Optionally handle the case when item doesn't exist (up to the UI)
        console.warn("Item not found in cart!");
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
