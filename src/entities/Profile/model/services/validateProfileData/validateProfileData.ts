import { Profile, ValidateProfileError } from "entities/Profile";

export const validateProfileData = (profile?: Profile) => {
  const errors: ValidateProfileError[] = [];

  if (!profile) errors.push(ValidateProfileError.NO_DATA);

  if (!profile?.username) errors.push(ValidateProfileError.INCORRECT_USERNAME);

  if (!profile?.name) errors.push(ValidateProfileError.INCORRECT_NAME);

  if (!profile?.avatar) errors.push(ValidateProfileError.INCORRECT_AVATAR);

  if (!profile?.location) errors.push(ValidateProfileError.INCORRECT_LOCATION);

  if (!profile?.age || !Number(profile?.age))
    errors.push(ValidateProfileError.INCORRECT_AGE);

  if (!profile?.gender) errors.push(ValidateProfileError.INCORRECT_GENDER);

  return errors;
};
