import * as React from "react";
import { LogoContent } from "../../../common/components/LogoButton";
import { MenuButton } from "../../../common/components/MenuButton";
import { NotifyButton } from "../../../common/components/NotifyButton";
import MenuGroup from "../containers/MenuGroup";

interface INavBarMobileProps {}

const NavBarMobile: React.FunctionComponent<INavBarMobileProps> = (props) => {
  return (
    <nav className="flex flex-row justify-between px-4 py-2">
      <LogoContent width={"32px"} height={"32px"} />
      <div className="flex flex-row items-center gap-2">
        <NotifyButton width={"32px"} height={"32px"} />
        <MenuGroup />
      </div>
    </nav>
  );
};

export default NavBarMobile;
