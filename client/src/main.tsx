// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./router/app-routes";
import "@mantine/core/styles.css";
//
import "./styles/global.css";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <AppRoutes />
    </MantineProvider>
  </StrictMode>
);
