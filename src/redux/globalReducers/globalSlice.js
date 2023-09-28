const { createSlice } = require('@reduxjs/toolkit');

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isModalLogout: false,
  },
  reducers: {
    openModalLogout: state => {
      state.isModalLogout = true;
    },
    closeModalLogout: state => {
      state.isModalLogout = false;
    },
  },
});

export const { openModalLogout, closeModalLogout } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
