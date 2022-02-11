import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { initialState, rootReducer } from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
});

export default store;