import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: null,
  loading: false,
  error: null
};

const diagnosisSlice = createSlice({
  name: 'diagnosis',
  initialState,
  reducers: {
    setDiagnosisResult: (state, action) => {
      state.result = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearDiagnosis: (state) => {
      state.result = null;
      state.loading = false;
      state.error = null;
    }
  }
});

export const { 
  setDiagnosisResult, 
  setLoading, 
  setError, 
  clearDiagnosis 
} = diagnosisSlice.actions;

export default diagnosisSlice.reducer; 