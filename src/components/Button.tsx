import React from "react";
import "../styles/tokens.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const style = {
    background:
      variant === "primary"
        ? "var(--yt4g-color-primary)"
        : "var(--yt4g-color-background)",
    color: "var(--yt4g-color-text)",
    border: "none",
    borderRadius: "var(--yt4g-radius)",
    padding: "0.6rem 1.2rem",
    fontFamily: "var(--yt4g-font)",
    cursor: "pointer",
  } as const;

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
};
