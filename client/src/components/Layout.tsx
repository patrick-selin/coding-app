// components/Layout.tsx
import React from "react";
import { Container } from "@mantine/core"; // Mantine component
import Navigation from "./Navigation"; // Import Navigation component
import Footer from "./Footer"; // Import Footer component
import { Outlet } from "react-router-dom";

// Define a layout that wraps around each page
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navigation /> {/* Navigation bar at the top */}
      <main style={{ flex: 1 }}>
        {" "}
        {/* Main content area */}
        <Container size="sm" style={{ paddingTop: "2rem" }}>
          {children}
          <Outlet />
        </Container>
      </main>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default Layout;
