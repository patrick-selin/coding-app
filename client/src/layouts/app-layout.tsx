// layouts/app-layout.tsx
import { Outlet } from "react-router";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Container, useMantineTheme } from "@mantine/core";
import classes from "./app-layout.module.css";

const AppLayout = () => {
  const theme = useMantineTheme();
  console.log("Theme", theme);

  return (
    <div className={classes.appLayout}>
      <Header />
      <main className={classes.mainContent}>
        <Container size="lg">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
