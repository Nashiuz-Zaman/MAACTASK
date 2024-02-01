// react router import
import { RouterProvider } from "react-router-dom";

// router
import router from "../../router/router";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// redux
import { useSelector } from "react-redux";

// components
import BackdropBlur from "../shared/BackdropBlur/BackdropBlur";

// styles
import styles from "./primaryComponent.module.scss";

const PrimaryComponent = () => {
  const { open } = useSelector((store) => store.backdrop);

  return (
    <div className={`${styles["primary-component"]}`}>
      {/* react toastify */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Slide}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* blur overlay in the page */}
      <BackdropBlur openState={open} />

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default PrimaryComponent;
