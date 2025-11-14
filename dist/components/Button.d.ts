import React from "react";
import "../styles/tokens.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}
export declare const Button: React.FC<ButtonProps>;
