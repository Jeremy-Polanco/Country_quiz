import { configureStore, createReducer } from "@reduxjs/toolkit";
import questionReducer from "./features/questionSlice";
export const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});
