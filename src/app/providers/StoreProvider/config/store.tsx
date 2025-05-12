import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { StateSchema } from "./StateSchema";

export const CreateReduxStore = (initialState: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer },
    preloadedState: initialState,
    devTools: __IS_DEV__,
    //middleware: Берется из createApi
  });
};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
