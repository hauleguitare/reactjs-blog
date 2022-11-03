import * as Yup from "yup";

export const LoginSchema = Yup.object({
  usernameOrEmail: Yup.string().required("Username or Email is required!"),
  password: Yup.string().required("Password is required!"),
});
