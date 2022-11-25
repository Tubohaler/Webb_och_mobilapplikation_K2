import React, { createContext, useState } from "react";
import { ProjectType } from "../types/projectTypes";

export type ProjectContext = {
  projects: ProjectType;
  setProjects: React.Dispatch<React.SetStateAction<ProjectType>>;
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

export const ProjectContext = createContext<ProjectContext | null>(null);

export const ProjectsProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState<ProjectType>({
    projectName: "none",
    color: "none",
    projectId: 1,
    hourlyRate: 0,
  });
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {" "}
      {children}
    </ProjectContext.Provider>
  );
};
