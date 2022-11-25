import React, { Children, createContext, useState } from "react";
import { TimesType } from "../types/timesTypes";

export type TimeContext = {
  times: TimesType;
  setTimes: React.Dispatch<React.SetStateAction<TimesType>>;
};

interface Props {
  children: React.ReactNode;
}

const initialStateTimes = {
  start: 0,
  taskId: 0,
  time: 0,
  id: 0,
  end: 0,
};

export const TimeContext = createContext<TimeContext | null>(null);

const TimesProvider = ({ children }: Props) => {
  const [times, setTimes] = useState<TimesType>({
    start: 0,
    taskId: 0,
    time: 0,
    id: 0,
    end: 0,
  });
  return (
    <TimeContext.Provider value={{ times, setTimes }}>
      {" "}
      {children}
    </TimeContext.Provider>
  );
};
