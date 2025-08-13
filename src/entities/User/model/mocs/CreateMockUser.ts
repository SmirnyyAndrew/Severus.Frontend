import { USER_AVATAR_ERROR } from "shared/const/plugFiles";
import { User } from "../types/User";
import { UserRole } from "../types/UserRole";

export const CreateMockUser = (): User => {
  return {
    id: "12332",
    username: "username",
    avatar: USER_AVATAR_ERROR,
    roles: [UserRole.USER],
    features: {},
    jsonSettings: {},
  };
};
