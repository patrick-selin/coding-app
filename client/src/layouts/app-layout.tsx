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
<<<<<<< HEAD
        <Container size="lg">
=======
        <Container>
>>>>>>> 8e32d52969a8947b57b4113f0b410af0e85751e1
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
>>>>>>> 8e32d52969a8947b57b4113f0b410af0e85751e1
