import { UserRole } from "./UserRole";

export interface User {
  id?: string;
  username?: string;
  avatar?: string;
  roles?: UserRole[];
}
