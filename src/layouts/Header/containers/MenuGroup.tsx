import * as React from "react";
import { MenuButton } from "../../../common/components/MenuButton";

interface IMenuGroupProps {}

const MenuGroup: React.FunctionComponent<IMenuGroupProps> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const onClick = (e: React.MouseEvent) => {
    console.log(ref.current?.contains(e.currentTarget));
  };
  return (
    <div ref={ref}>
      <MenuButton width={"32px"} height={"32px"} onClick={onClick} />
    </div>
  );
};

export default MenuGroup;
