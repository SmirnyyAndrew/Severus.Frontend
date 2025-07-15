import { ThunkExtraArgs } from "features/AuthManagement/AuthByUsername";
import {
  MountedReducers,
  ReducerManager,
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
  ThunkConfig,
} from "./config/StateSchema";
import { AppDispatch, CreateReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export { CreateReduxStore, StoreProvider };

export type {
  AppDispatch,
  MountedReducers,
  ReducerManager,
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
  ThunkConfig,
  ThunkExtraArgs,
};
