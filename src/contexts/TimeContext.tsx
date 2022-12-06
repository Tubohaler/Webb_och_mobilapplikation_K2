import React, { Children, createContext, useState, useContext } from "react";
import { TimesType } from "../types/timesTypes";
import dayjs from "dayjs";

export type TimeLogContext = {
  times: TimesType[];
  setTimes: React.Dispatch<React.SetStateAction<TimesType[]>>;
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

export const TimeContext = createContext<TimeLogContext | null>(null);

export const TimesProvider = ({ children }: Props) => {
  const [times, setTimes] = useState<TimesType[]>([]);

  return (
    <TimeContext.Provider value={{ times, setTimes }}>
      {" "}
      {children}
    </TimeContext.Provider>
  );
};
export function useTimeLogs() {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error("Hooks not used insde same context.");
  }
  return context;
}
