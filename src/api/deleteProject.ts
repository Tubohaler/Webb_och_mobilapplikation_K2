import axios from "axios";
import { ProjectType } from "../types/projectTypes";

export const deleteProject = async (projectId: number): Promise<ProjectType[]> => {
    try {
        const data = await axios.delete(`http://localhost:3000/projects/${projectId}`);
        return data.data
    } catch(err) {
        throw{message: "Problemos when deleting this project.", status: 404}
    }
}