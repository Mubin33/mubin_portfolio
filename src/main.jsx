import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import ProjectList from "./Components/ProjectList.jsx";
import ProjectDetails from "./Components/ProjectDetails.jsx";
import Home from "./Home.jsx";
import MePage from "./Components/MePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [   
      { path: "/", element: <Home /> }, 
      { path: "/meinfo", element: <MePage /> }, 
      { path: "projects/:id", element: <ProjectDetails /> }, 
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
