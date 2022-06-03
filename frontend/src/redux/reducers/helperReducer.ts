import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLoader: false,
  requestError: [{
  }],
};

const helperSlice = createSlice({
  name: 'helpers',
  initialState,
  reducers: {
    setLoader(state, action: PayloadAction<boolean>) {
      state.isLoader = action.payload;
    },
    setRequestError(state, action: PayloadAction<string>) {
      state.requestError.push({
        message: action.payload
      })
    },
  }
})

export const { setLoader, setRequestError } = helperSlice.actions;

export default helperSlice.reducer;

