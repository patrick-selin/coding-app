// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./router/app-routes";
import "@mantine/core/styles.css";
//
import "./styles/global.css";
import { MantineProvider } from "@mantine/core";
import mantineTheme from "./styles/mantine-theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={mantineTheme} withNormalizeCSS withGlobalStyles>
      <AppRoutes />
    </MantineProvider>
  </StrictMode>
);
