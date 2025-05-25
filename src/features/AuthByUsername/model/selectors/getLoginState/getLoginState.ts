import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "features/AuthByUsername";

export const getLoginState = (state: StateSchema) =>
  state.login ?? initialLoginState;

const initialLoginState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
  error: undefined,
};
