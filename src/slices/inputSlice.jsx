import { createSlice } from '@reduxjs/toolkit';

export const inputSlice = createSlice({
  name: 'input', 
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = inputSlice.actions;

export const selectData = (state) => state.input.value; 

export default inputSlice.reducer;