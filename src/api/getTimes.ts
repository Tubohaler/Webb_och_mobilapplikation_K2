import axios from "axios";
import { TimesType } from "../types/timesTypes";

export const getTimes = async (): Promise<TimesType[]> => {
    try {
        const data = await axios.get(`http://localhost:3000/timelogs`);
        return data.data
    }catch(err) {
        throw {message: "Problem getting timelogs.", status: 404}
    }
};