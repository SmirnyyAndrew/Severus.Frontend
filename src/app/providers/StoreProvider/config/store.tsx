import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { profileReducer } from "entities/Profile";
import { userReducer } from "entities/User";
import { To } from "history";
import { NavigateOptions } from "react-router";
import { $api } from "shared/api/api";
import { CreateReducerManager } from "./ReducerManager";
import { StateSchema } from "./StateSchema";

export const CreateReduxStore = (
  initialState: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    profile: profileReducer,
  };

  const reducerManager = CreateReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof CreateReduxStore>["dispatch"];
