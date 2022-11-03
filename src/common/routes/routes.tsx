import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../home/pages/homePage";
import { LoginPage } from "../../auth/pages/loginPage";
import { SignupPage } from "../../auth/pages/signupPage";
import { PathRouter } from "../enums/path-router.enum";

export interface IRoutePagesProps {}

export function RoutePages(props: IRoutePagesProps) {
  return (
    <React.Fragment>
      <Routes>
        <Route path={PathRouter.HOME} element={<HomePage />}></Route>
        <Route path={PathRouter.LOGIN} element={<LoginPage />}></Route>
        <Route path={PathRouter.SIGNUP} element={<SignupPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}
