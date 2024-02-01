// react-router imports
import { Outlet } from "react-router-dom";

// components
import Header from "./../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

// abstract image
import blueAbstract from "./../../assets/abstract/blue-abstract.webp";

function RootLayout() {
  return (
    <div
      style={{
        backgroundImage: `url(${blueAbstract})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
