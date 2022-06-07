import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  token: string,
  user: {
    name: string,
    email: string,
    password: string;
  }
}

const initialState = {
  user: {} || JSON.parse(localStorage.getItem('user') || "")
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | {}>) {
      state.user = action.payload;
    },
  }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;