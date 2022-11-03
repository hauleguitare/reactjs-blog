import * as Yup from "yup";
export const SignupSchema = Yup.object({
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  email: Yup.string().email().required("Email is required!"),
  username: Yup.string().required("Username is required!"),
  password: Yup.string()
    .min(6)
    .required("Password is required")
    .matches(/[a-z]+/, "One lowercase character.")
    .matches(/[A-Z]+/, "One uppercase character.")
    .matches(/[@$!%*#?&]+/, "One special character.")
    .matches(/\d+/, "One number."),
  re_password: Yup.string()
    .required("Re password is required!")
    .oneOf([Yup.ref("password")], "Your password do not match!"),
});
