// main.tsx
import { StrictMode } from "react";
import "@mantine/core/styles.css";
import "./styles/global.css";
//
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
//
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Challenges from "./pages/Challenges";
import ChallengeWorkspace from "./pages/ChallengeWorkspace/ChallengeWorkspace";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={undefined} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "challenges",
        element: <Challenges />,
      },
      {
        path: "challenges/:id",
        element: <ChallengeWorkspace />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />{" "}
    </MantineProvider>
  </StrictMode>
);
