import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    deleteAppointment: (state, action) => {
      state.appointments = state.appointments.filter(
        (appt) => appt.id !== action.payload
      );
    },
    updateAppointment: (state, action) => {
      const index = state.appointments.findIndex(
        (appt) => appt.id === action.payload.id
      );
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    },
  },
});

export const { addAppointment, deleteAppointment, updateAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
