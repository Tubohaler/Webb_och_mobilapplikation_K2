import axios from "axios";
import { TaskType } from "../types/tasksTypes";

export const deleteTasks = async (id: number): Promise<TaskType[]> => {
    try { 
        const data = await axios.delete(`http://localhost:3000/tasks/${id}`);
        return data.data
    }   catch(err) {
        throw {message: "Problems with deleting task.", status: 404}
    }
}