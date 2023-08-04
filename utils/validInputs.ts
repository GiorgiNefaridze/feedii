interface IValidInputs {
  (
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    secret?: string
  ): boolean;
}

export const validInputs: IValidInputs = (
  email,
  password,
  firstName,
  lastName,
  secret
) => {
  if (firstName?.length && lastName?.length && secret?.length) {
    if (
      email?.length > 5 &&
      email?.includes("@") &&
      password?.trim()?.length > 3
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
