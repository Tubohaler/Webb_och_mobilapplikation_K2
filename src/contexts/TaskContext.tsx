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
  updateTodos: (newData: TaskType[]) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<TaskType[]>([]);
  const value: TaskContextType = { todos, updateTodos };
  function updateTodos(newData: TaskType[]) {
    setTodos(newData);
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
