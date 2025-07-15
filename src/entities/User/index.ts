import {
  getUser,
  getUserAuthData,
  getUserInited,
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from "./model/selectors/userSelectors";
import { userActions, userReducer, userSlice } from "./model/slice/userSlice";
import { User } from "./model/types/User";
import { UserRole } from "./model/types/UserRole";
import { UserSchema } from "./model/types/UserSchema";

export {
  getUser,
  getUserAuthData,
  getUserInited,
  getUserRoles,
  isUserAdmin,
  isUserManager,
  userActions,
  userReducer,
  UserRole,
  userSlice,
};

export type { User, UserSchema };
