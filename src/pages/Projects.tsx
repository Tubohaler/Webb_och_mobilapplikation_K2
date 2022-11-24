import React, { useState, useEffect } from "react";
import { getAllProjects } from "../api/getAllProjects";
import { deleteProject } from "../api/deleteProject";
import { ProjectType } from "../types/projectTypes";
// import getAllProjects from "../api/getAllProjects";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
`;

interface Props {
  projects: ProjectType;
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [input, setInput] = useState<ProjectType[]>([]);

  async function getProjectData() {
    const data = await getAllProjects();
    setProjects(data);
  }

  useEffect(() => {
    getProjectData();
  }, []);
  console.log(projects);

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.projectId}>
          <div color={project.color}>...</div>
          {project.projectName}
          <StyledButton onClick={() => deleteProject(project.projectId)}>
            Delete
          </StyledButton>
        </li>
      ))}
    </ul>
  );
}
