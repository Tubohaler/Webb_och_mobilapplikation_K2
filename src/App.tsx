import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "./api/getAllProjects";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("overview");
    getAllProjects();
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
