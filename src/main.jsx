// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// primary component
import PrimaryComponent from "./components/PrimaryComponent/PrimaryComponent";

// style import
import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimaryComponent />
  </React.StrictMode>
);
