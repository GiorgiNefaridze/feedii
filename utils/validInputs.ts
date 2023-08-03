interface IValidInputs {
  (
    email: string,
    password: string,
    fName?: string,
    lName?: string,
    secret?: string
  ): boolean;
}

export const validInputs: IValidInputs = (
  email,
  password,
  fName,
  lName,
  secret
) => {
  if (fName?.length && lName?.length && secret?.length) {
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
