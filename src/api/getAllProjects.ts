import axios from "axios";
import { ProjectType } from "../types/projectTypes";

export const getAllProjects = async (): Promise<ProjectType[]> => {
    try {
        const data = await axios.get(`http://localhost:3000/projects`);
        return data.data
    } catch(err) {
        throw {message: "Problem fetching Projects", status:404}
    }
};