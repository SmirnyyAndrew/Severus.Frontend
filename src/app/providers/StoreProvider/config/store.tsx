import {
  CombinedState,
  configureStore,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { ArticleReducer } from "entities/Article";
import { counterReducer } from "entities/Counter";
import { profileReducer } from "entities/Profile";
import { userReducer } from "entities/User";
import { To } from "history";
import { NavigateOptions } from "react-router";
import { $api } from "shared/api/api";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { CreateReducerManager } from "./ReducerManager";
import { StateSchema, ThunkExtraArgs } from "./StateSchema";

export const CreateReduxStore = (
  initialState: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducers: ReducersList = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    profile: profileReducer,
    article: ArticleReducer,
  };

  const reducerManager = CreateReducerManager(rootReducers);

  const extraArgs: ThunkExtraArgs = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    //@ts-ignore
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArgs,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof CreateReduxStore>["dispatch"];
