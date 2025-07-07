import { AnyAction, combineReducers, Reducer } from "@reduxjs/toolkit";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  MountedReducers,
  ReducerManager,
  StateSchema,
  StateSchemaKey,
} from "./StateSchema";

export function CreateReducerManager(
  initialReducers: ReducersList
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemaKey[] = [];
  const mountedReduceers: MountedReducers = {};

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (let key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      mountedReduceers[key] = true;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);
      mountedReduceers[key] = false;

      combinedReducer = combineReducers(reducers);
    },

    getMountedReducers: () => mountedReduceers,
  };
}
