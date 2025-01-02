// main.tsx
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./router/app-routes";

//
// import "./styles/global.css";
import { MantineProvider } from "@mantine/core";
import theme from "./styles/mantine-theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <AppRoutes />
    </MantineProvider>
  </StrictMode>
);
