import React, { useEffect, ReactNode } from "react";
import "../styles/tokens.css";

interface ThemeProviderProps {
  mode?: "light" | "dark";
  children: ReactNode;
}

export const ThemeProvider = ({
  mode = "dark",
  children,
}: ThemeProviderProps) => {
  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "dark" ? "var(--yt4g-color-background)" : "#ffffff";
  }, [mode]);

  return <>{children}</>;
};
