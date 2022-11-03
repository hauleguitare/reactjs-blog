export interface ISignupDataSubmitProps {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  re_password: string;
}

export interface ISignupDataProps
  extends Omit<ISignupDataSubmitProps, "re_password"> {}
