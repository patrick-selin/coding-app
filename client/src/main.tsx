// main.tsx
import { StrictMode } from "react";
import "./index.css";
import "@mantine/core/styles.css"; // Mantine CSS styles
//
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // React Router v6+ API
import { MantineProvider } from "@mantine/core";
//
import Layout from "./components/Layout"; // Import Layout component
import Home from "./pages/Home"; // Import Home page component
import Dashboard from "./pages/Dashboard"; // Import Dashboard page component
import Challenges from "./pages/Challenges"; // Import Challenges page component
import ChallengeWorkspace from "./pages/ChallengeWorkspace"; // Import ChallengeWorkspace

// Define your routes
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Layout />, // Layout component wraps all children routes
    children: [
      {
        path: "home", // Relative path for "home" route
        element: <Home />,
      },
      {
        path: "dashboard", // Relative path for "dashboard" route
        element: <Dashboard />,
      },
      {
        path: "challenges", // Relative path for "challenges" route
        element: <Challenges />,
      },
      {
        path: "challenges/:id", // Dynamic route for challenge workspace
        element: <ChallengeWorkspace />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={{}}>
      <RouterProvider router={router} />{" "}
      {/* Pass the router to RouterProvider */}
    </MantineProvider>
  </StrictMode>
);
