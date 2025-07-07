import { StateSchema } from "app/providers/StoreProvider";

export const getLimit = (state: StateSchema) => state.articles?.limit || 9;
