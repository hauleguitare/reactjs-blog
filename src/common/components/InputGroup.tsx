import * as React from "react";

export interface IInputGroupProps {
  children?: React.ReactNode;
}

export function InputGroup(props: IInputGroupProps) {
  const { children } = props;
  const Text = () => {
    return <div>Children</div>;
  };
  return <div className="flex flex-col py-2">{children}</div>;
}
