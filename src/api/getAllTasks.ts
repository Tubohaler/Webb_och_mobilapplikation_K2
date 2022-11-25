import axios from "axios";
import { TaskType } from "../types/tasksTypes";

export const getAllTasks = async (): Promise<TaskType[]> => {
    try {
        const tasks = await axios.get(`http://localhost:3000/tasks`);
        console.log(tasks);
        return tasks.data
    } catch(err) {
        throw {message: "Problem geting task list.", status: 404}
    }
};