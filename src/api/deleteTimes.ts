import axios from "axios";
import { TimesType } from "../types/timesTypes";

export const deleteTimes = async (id: number): Promise<TimesType[]> => {
    try {
        const data = await axios.delete(`http://localhost:3000/timelogs/${id}`);
        return data.data
} catch(err) {
    throw { message: "Problemo deleting time stamp.", status: 404}
}
}