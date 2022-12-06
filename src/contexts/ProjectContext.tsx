import React, { createContext, useContext, useState } from "react";
import { ProjectType } from "../types/projectTypes";

export type ProjectTypeContext = {
  projects: ProjectType[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>;
};

interface Props {
  children: React.ReactNode;
}

const intitalStateProject = {
  projectName: "",
  color: "",
  projectId: 0,
  hourly_rate: 0,
};

export const ProjectContext = createContext<ProjectTypeContext | null>(null);

export const ProjectsProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {" "}
      {children}
    </ProjectContext.Provider>
  );
};
export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("Hooks not used inside same context.");
  }
  return context;
}
