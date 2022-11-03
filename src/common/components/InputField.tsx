import * as React from "react";
import { forwardRef } from "react";

export interface IInputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function Input(
  props: IInputFieldProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      {...props}
      className="outline-none bg-sky-100 py-2 px-2 rounded-lg"
    ></input>
  );
}

export const InputField = forwardRef(Input);
