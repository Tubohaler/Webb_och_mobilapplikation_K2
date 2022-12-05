import React, { createContext, useState, useContext } from "react";
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

  function updateTodos(newData: TaskType[]): void {
    setTodos(newData);
  }

  const value: TaskContextType = {
    todos,
    updateTodos,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Hooks not used inside same context.");
  }
  return context;
}
