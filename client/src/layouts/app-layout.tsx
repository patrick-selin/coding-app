// layouts/app-layout.tsx
import { Outlet } from "react-router";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Container } from "@mantine/core";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Container size="lg">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default AppLayout;
=======
export default AppLayout;
>>>>>>> b259e4d870b5e787374fae5209604ff5271b57a2
