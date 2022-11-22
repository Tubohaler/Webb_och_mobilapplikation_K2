import React, { createContext, useContext, useEffect, useState } from "react";
import { ProjectType } from "../types/projectTypes";

export type ProjectContext = {
  // input: ProjectType;
  // setInput: React.Dispatch<React.SetStateAction<ProjectType>>;

  projects: ProjectType;
  setProjects: React.Dispatch<React.SetStateAction<ProjectType>>;

  // todos: ProjectType;
  // setTodos: React.Dispatch<React.SetStateAction<ProjectType>>;

  // startDate: ProjectType;
  // setStartDate: React.Dispatch<React.SetStateAction<ProjectType>>;

  // active: ProjectType;
  // setActive: React.Dispatch<React.SetStateAction<ProjectType>>;

  // timelog: ProjectType;
  // setTimeLog: React.Dispatch<React.SetStateAction<ProjectType>>;
};

interface Props {
  children: React.ReactNode;
}

const intitalStateProject = {
  name: "",
  color: "",
  id: 0,
  hourly_rate: 0,
};

// const initialStateTasks = {
//     "title": "",
//     "id": ""
// }

export const ProjectContext = createContext<ProjectContext | null>(null);

export const ProjectsProvider = ({ children }: Props) => {
  //   const [input, setInput] = useState<ProjectType>("");
  //   const [input2, setInput2] = useState<ProjectType>("");
  const [projects, setProjects] = useState<ProjectType>({
    name: "none",
    color: "none",
    id: 1,
    hourlyRate: 0,
  });
  //   const [todos, setTodos] = useState<ProjectType>([]);
  //   const [startDate, setStartDate] = useState<ProjectType>(new Date());
  //   const [active, setActive] = useState<ProjectType>(false);
  //   const [timelog, setTimelog] = useState<ProjectType>([]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {" "}
      {children}
    </ProjectContext.Provider>
  );
};
