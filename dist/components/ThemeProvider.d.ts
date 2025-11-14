import { ReactNode } from "react";
import "../styles/tokens.css";
interface ThemeProviderProps {
    mode?: "light" | "dark";
    children: ReactNode;
}
export declare const ThemeProvider: ({ mode, children, }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
