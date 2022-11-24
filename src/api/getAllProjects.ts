import axios from "axios";
import { ProjectType } from "../types/projectTypes";

export const getAllProjects = async (): Promise<ProjectType[]> => {
    try {
        const data = await axios(`http://localhost:3000/projects`);
        console.log({data})
        return data.data
    } catch(err) {
        throw {message: "Problem fetching Projects", status:404}
    }
};