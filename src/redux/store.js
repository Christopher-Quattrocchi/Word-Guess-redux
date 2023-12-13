import { configureStore } from "@reduxjs/toolkit";
import wordControlReducer from './wordControlSlice';

export const store = configureStore({
  reducer: {
    wordControl: wordControlReducer

  },
});