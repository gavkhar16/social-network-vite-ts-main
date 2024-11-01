import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { authApi } from "./Api/authApi";
import { postApi } from "./Api/postApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [authApi.reducerPath]:authApi.reducer,
    [postApi.reducerPath]:postApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat([
      authApi.middleware,postApi.middleware
    ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
