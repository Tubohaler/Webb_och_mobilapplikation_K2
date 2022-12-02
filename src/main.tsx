import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectsProvider } from "./contexts/ProjectContext";

import Overview from "./pages/Overview";

import App from "./App";
import "./index.css";
import { TaskProvider } from "./contexts/TaskContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProjectsProvider>
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </ProjectsProvider>
  </React.StrictMode>
);
