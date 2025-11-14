import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// We are building a *library*, not an app.
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: "./src/index.ts",
      name: "yt4g-ui-kit",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"], // use peer deps at runtime
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
