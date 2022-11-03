import * as React from "react";
import NavBarMobile from "./components/NavBarMobile";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="bg-gray-200">
      <NavBarMobile />
    </header>
  );
};

export default Header;
