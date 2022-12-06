import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "./api/getAllProjects";
import { getInvoices } from "./api/getInvoices";
import { getTimes } from "./api/getTimes";
import "./App.css";
import { useInvoices } from "./contexts/InvoiceContext";
import { useProjects } from "./contexts/ProjectContext";
import { useTasks } from "./contexts/TaskContext";
import { useTimeLogs } from "./contexts/TimeContext";
import { getAllTasks } from "./api/getAllTasks";

function App() {
  const navigate = useNavigate();

  const { setProjects } = useProjects();
  const { setTimes } = useTimeLogs();
  const { setInvoices } = useInvoices();
  const { updateTodos } = useTasks();

  useEffect(() => {
    navigate("overview");
    async function init() {
      const projectData = await getAllProjects();
      setProjects(projectData);
      const timeData = await getTimes();
      setTimes(timeData);
      const invoiceData = await getInvoices();
      setInvoices(invoiceData);
      const taskData = await getAllTasks();
      updateTodos(taskData);
    }
    init();
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
