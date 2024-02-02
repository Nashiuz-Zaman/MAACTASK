// react router imports
import { createBrowserRouter } from "react-router-dom";

// main layout
import RootLayout from "../components/layouts/RootLayout";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";

// page components
import Home from "../components/pages/Home/Home";
import RegistrationPage from "../components/pages/RegistrationPage/RegistrationPage";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegionPage from "../components/pages/RegionPage/RegionPage";
import AreaPage from "./../components/pages/AreaPage/AreaPage";
import ErrorPage from "./../components/pages/ErrorPage/ErrorPage";
import CreateRegionPage from "../components/pages/CreateRegionPage/CreateRegionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/registration", element: <RegistrationPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
    errorElement: <ErrorPage />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "region", element: <RegionPage /> },
      { path: "area", element: <AreaPage /> },
      { path: "create-region", element: <CreateRegionPage /> },
    ],
  },
]);

export default router;
