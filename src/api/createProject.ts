import { useState } from "react";
import axios from "axios";
import { ProjectType } from "../types/projectTypes";

export const createProject = async (): Promise<ProjectType[]> => {
    const [input, setInput] = useState<ProjectType[]>([])

    try {
        const data = await axios.post(`http://localhost:3000/projects`, {
            projectName: input,
            color: "#4E0E9F"
        })
        return data.data
    } catch (err) {
        throw {message: "Problem adding project.", status:404}
    }
}