import * as React from "react";
import { LogoContent } from "../../common/components/LogoButton";
import { LoginForm } from "../components/LoginForm";

export interface ILoginPageProps {}

export function LoginPage(props: ILoginPageProps) {
  return (
    <div className="container">
      <div className="flex flex-col items-center pt-4">
        <LogoContent width={"48px"} height={"48px"} />
      </div>
      <LoginForm />
    </div>
  );
}
