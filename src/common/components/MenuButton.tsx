import * as React from "react";

export interface IMenuButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  height?: string | number;
}

export function MenuButton(props: IMenuButtonProps) {
  const { width, height, ...other } = props;
  return (
    <button {...other}>
      <svg
        style={{
          width: width || "24px",
          height: height || "24px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
