export type Profile = {
  id: string;
  username: string;
  name: string;
  location: string;
  age: string;
  gender: string;
  avatar: string;
};

export enum ValidateProfileError {
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_AVATAR = "INCORRECT_AVATAR",
  INCORRECT_GENDER = "INCORRECT_GENDER",
  INCORRECT_LOCATION = "INCORRECT_LOCATION",
  INCORRECT_NAME = "INCORRECT_NAME",
  INCORRECT_USERNAME = "INCORRECT_USERNAME",
  NO_DATA = "NO_DATA",

  SERVER_ERROR = "SERVER_ERROR",
}
