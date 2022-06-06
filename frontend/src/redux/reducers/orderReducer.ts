import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Order = {
  productId: number;
  orderedPrice: number;
  quantity: number;
}

type OrderState = {
  orderItems: Order[]
}

const initialState: OrderState = {
  orderItems: [],
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderItems(state, action: PayloadAction<Order>) {
      const orderItem = action.payload;
      state.orderItems.forEach((el: Order) => {
        if (el.productId !== orderItem.productId) {
          state.orderItems.push(orderItem);
        }
      })
    },
    updateOrderItem(state, action: PayloadAction<Order>) {
      const orderItem = action.payload;
      state.orderItems.forEach((el, index) => {
        if (el.productId === orderItem.productId) {
          state.orderItems[index] = orderItem
        }
      })
    },
    deleteOrderItem(state, action: PayloadAction<number>) {
      state.orderItems = state.orderItems.filter(el => el.productId === action.payload);
    }
  }
})

export const { setOrderItems, updateOrderItem, deleteOrderItem } = orderSlice.actions;

export default orderSlice.reducer;