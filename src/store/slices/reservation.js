import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservation: {},
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservation: (state, action) => {
      return {
        ...state,
        reservation: { ...state.reservation, ...action.payload },
      };
    },
    deleteToken: (state, action) => {
      return {
        reservation: { ...action.payload },
      };
    },
  },
});

export const { setReservation, deleteToken } = reservationSlice.actions;

export default reservationSlice.reducer;
