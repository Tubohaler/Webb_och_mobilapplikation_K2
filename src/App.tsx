import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("overview");
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
