import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ErrorField } from "../../common/components/ErrorField";
import { InputField } from "../../common/components/InputField";
import { InputGroup } from "../../common/components/InputGroup";
import { SubmitButton } from "../../common/components/SubmitButton";
import { PathRouter } from "../../common/enums/path-router.enum";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../common/schema/Signup.schema";
import { SignupField } from "../../common/enums/signup-field.enum";
import { ISignupDataSubmitProps } from "../interfaces/signup-data-submit.interface";
import { SignUpUser } from "../../api/auth/signup.api";
import axios from "axios";

export interface ISignupFormProps {}

export function SignupForm(props: ISignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupDataSubmitProps>({
    resolver: yupResolver(SignupSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<ISignupDataSubmitProps> = async (
    data_submit: ISignupDataSubmitProps
  ) => {
    const { re_password, ...other } = data_submit;
    // const res = await axios.post(
    //   "http://localhost:3334/api/auth/signup",
    //   other
    // );
  };

  return (
    <form className="flex flex-col px-8 py-4" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <label htmlFor={SignupField.Firstname}>First name</label>
        <InputField
          id={SignupField.Firstname}
          type="text"
          placeholder="Your first name"
          {...register(SignupField.Firstname)}
        />
        <ErrorField message={errors.firstName?.message?.toString()} />
      </InputGroup>

      <InputGroup>
        <label htmlFor={SignupField.Lastname}>Last name</label>
        <InputField
          id={SignupField.Lastname}
          type="text"
          placeholder="Your last name"
          {...register(SignupField.Lastname)}
          required
        />
        <ErrorField message={errors.lastName?.message?.toString()} />
      </InputGroup>

      <InputGroup>
        <label htmlFor={SignupField.Email}>Email</label>
        <InputField
          id={SignupField.Email}
          type="text"
          placeholder="Your email"
          {...register(SignupField.Email)}
        />
        <ErrorField message={errors.email?.message?.toString()} />
      </InputGroup>

      <InputGroup>
        <label htmlFor={SignupField.Username}>Username</label>
        <InputField
          id={SignupField.Username}
          type="text"
          placeholder="Your username"
          {...register(SignupField.Username)}
        />
        <ErrorField message={errors.username?.message?.toString()} />
      </InputGroup>

      <InputGroup>
        <label htmlFor={SignupField.Password}>Password</label>
        <InputField
          id={SignupField.Password}
          type={SignupField.Password}
          placeholder="your password"
          {...register(SignupField.Password)}
        />
        <ErrorField message={errors.password?.message?.toString()} />
      </InputGroup>

      <InputGroup>
        <label htmlFor="re_password">Re-password</label>
        <InputField
          id={SignupField.RePassword}
          type={"password"}
          placeholder="Please re password"
          {...register(SignupField.RePassword)}
        />
        <ErrorField message={errors.re_password?.message?.toString()} />
      </InputGroup>

      <SubmitButton label="Signup" />
      <div className="text-center">
        <span>Already a member?</span>{" "}
        <Link to={PathRouter.LOGIN} className="text-blue-400">
          Login
        </Link>
      </div>
    </form>
  );
}
