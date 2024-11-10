import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSlice from "./Slices/bookSlice";

const rootReducer = combineReducers({
    books: bookSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
