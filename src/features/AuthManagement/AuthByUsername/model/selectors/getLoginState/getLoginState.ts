import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "features/AuthManagement/AuthByUsername";
import { buildSelector } from "shared/lib/srote/buildSelector";

export const [useGetLoginState, getLoginStateSelector] = buildSelector(
  (state: StateSchema) => state.login ?? initialLoginState
);

const initialLoginState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
  error: undefined,
};
