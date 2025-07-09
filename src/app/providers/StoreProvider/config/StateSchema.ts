import { AnyAction, EnhancedStore, Reducer } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { AddNewCommentFormSchema } from "features/ArticleDetailsManagement/AddNewCommentForm";
import { LoginSchema } from "features/AuthManagement/AuthByUsername";
import { ScrollSaveSchema } from "features/UIManagement/ScrollSave";
import { To } from "history";
import { ArticleDetailsPageSchema } from "pages/ArticleManagement/ArticleDetailsPage";
import { ArticlePageSchema } from "pages/ArticleManagement/ArticlePage";
import { NavigateOptions } from "react-router";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  pageScroll: ScrollSaveSchema;

  // Async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleDetailsSchema;
  addNewCommentForm?: AddNewCommentFormSchema;

  articles?: ArticlePageSchema;

  // articleDetailsComments?: ArticleDetailsCommentsSchema;
  // articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
export interface ReducerManager {
  getReducerMap: () => ReducersList;
  reduce: (state: StateSchema, action: AnyAction) => ReducersList;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;

  //true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
