import * as React from "react";
import { LogoContent } from "../../common/components/LogoButton";
import { SignupForm } from "../components/SignupForm";

export interface ISignupPageProps {}

export function SignupPage(props: ISignupPageProps) {
  return (
    <div className="container">
      <div className="flex flex-col items-center pt-4">
        <LogoContent width={"48px"} height={"48px"} />
      </div>
      <SignupForm />
    </div>
  );
}
