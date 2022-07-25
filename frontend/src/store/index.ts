import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {cartsReducer} from "./reducers/carts/carts.reducer";

const rootReducer = combineReducers({
    carts: cartsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
  });

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
