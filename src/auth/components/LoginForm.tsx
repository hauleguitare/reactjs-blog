import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ErrorField } from "../../common/components/ErrorField";
import { InputField } from "../../common/components/InputField";
import { InputGroup } from "../../common/components/InputGroup";
import { SubmitButton } from "../../common/components/SubmitButton";
import { PathRouter } from "../../common/enums/path-router.enum";
import { LoginSchema } from "../../common/schema/Login.schema";
import { ILoginDataSubmitProps } from "../interfaces/login-data-submit.interface";

export interface ILoginFormProps {}

export function LoginForm(props: ILoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginDataSubmitProps>({
    resolver: yupResolver(LoginSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<ILoginDataSubmitProps> = (
    data: ILoginDataSubmitProps
  ) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="flex flex-col px-8 py-4" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <label htmlFor="usernameOrEmail">Username Or Email</label>
        <InputField
          {...register("usernameOrEmail")}
          id="usernameOrEmail"
          type="text"
          placeholder="Your Username or Email"
        />
        <ErrorField message={errors.usernameOrEmail?.message?.toString()} />
      </InputGroup>

      <InputGroup>
        <label htmlFor="password">Password</label>
        <InputField
          {...register("password")}
          id="password"
          type="password"
          placeholder="Your password"
        />
        <ErrorField message={errors.password?.message?.toString()} />
      </InputGroup>
      <SubmitButton label="Login" />
      <div className="text-center">
        <span>Not member?</span>{" "}
        <Link to={PathRouter.SIGNUP} className="text-blue-400">
          Signup now
        </Link>
      </div>
    </form>
  );
}
