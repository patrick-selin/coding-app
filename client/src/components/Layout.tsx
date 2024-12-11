// components/Layout.tsx
import React from "react";
import { Container } from "@mantine/core";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      <main>
        <Container>
          {children}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
