// react router imports
import { createBrowserRouter } from "react-router-dom";

// main layout
import RootLayout from "../components/layouts/RootLayout";

// page components
import Home from "../components/pages/Home/Home";
import RegistrationPage from "../components/pages/RegistrationPage/RegistrationPage";
import LoginPage from "../components/pages/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/registration", element: <RegistrationPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

export default router;
