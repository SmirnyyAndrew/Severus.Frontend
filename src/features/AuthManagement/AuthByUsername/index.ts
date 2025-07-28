import { ThunkExtraArgs } from "app/providers/StoreProvider/config/StateSchema";
import { useLogin } from "./model/hooks/useLogin";
import {
  getLoginStateSelector,
  useGetLoginState,
} from "./model/selectors/getLoginState/getLoginState";
import {
  loginActions,
  loginReducer,
  loginSlice,
} from "./model/slice/loginSlice";
import { loginByUsernameThunk } from "./model/thunks/loginByUsernameThunk/loginByUsernameThunk";
import { LoginSchema } from "./model/types/LoginSchema";
import { LoginFormAsync } from "./ui/LoginForm/LoginForm.async";
import { LoginModal } from "./ui/LoginModal/LoginModal";

export {
  getLoginStateSelector,
  loginActions,
  loginByUsernameThunk,
  LoginFormAsync as LoginForm,
  LoginModal,
  loginReducer,
  loginSlice,
  useGetLoginState,
  useLogin,
};

export type { LoginSchema, ThunkExtraArgs };
