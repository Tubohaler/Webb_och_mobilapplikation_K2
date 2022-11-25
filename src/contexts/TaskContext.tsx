import React, { createContext, useState } from "react";
import { TaskType } from "../types/tasksTypes";

const initialTaskState = {
  title: "",
  id: 0,
  projectId: "",
};

interface Props {
  children: React.ReactNode;
}

export interface TaskContextType {
  todos: TaskType[];
  setTodos: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<TaskType[]>([]);
  return (
    <TaskContext.Provider value={{ todos, setTodos }}>
      {children}
    </TaskContext.Provider>
  );
};
