import { User } from "entities/User";

export interface UserSchema {
  authData?: User;
  _inited?: boolean;
}
