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
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;

// import { Outlet } from "react-router";
// import Navbar from "../components/navbar/navbar";
// import Sidebar from "../components/sidebar/sidebar";

// const MainLayout = () => {
//   return (
//     <div className="main-layout">
//       <Navbar />
//       <div className="content-wrapper">
//         <Sidebar />
//         <main className="main-content">
//           <Outlet /> {/* Render child routes here */}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;
