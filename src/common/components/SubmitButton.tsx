import * as React from "react";

export interface ISubmitButtonProps {
  label?: string;
}

export function SubmitButton(props: ISubmitButtonProps) {
  const { label } = props;
  return (
    <button className="bg-sky-400 rounded-lg py-2 my-2">
      {label || "Submit"}
    </button>
  );
}
