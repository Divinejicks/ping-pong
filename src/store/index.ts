import { configureStore } from "@reduxjs/toolkit";
import rankSlice from "./slice/rankSlice";

export const store = configureStore({
  reducer: {
    rank: rankSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
