import React, { useState, useEffect } from "react";
import { getAllProjects } from "../api/getAllProjects";
import { deleteProject } from "../api/deleteProject";
import { ProjectType } from "../types/projectTypes";
// import getAllProjects from "../api/getAllProjects";
import styled from "styled-components";
import { useProjects } from "../contexts/ProjectContext";
import { useTasks } from "../contexts/TaskContext";

const Buttons = styled.button`
  font-size: 1em;
  color: white;
  background-color: rgba(255, 53, 41, 0.56);
  margin: 0.2em;
  margin-left: 0.5em;
  padding: 0.25em 1em;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1em;
  margin-bottom: -16em;
  overflow: auto;
  width: 30em;
  height: 19em;
`;

const TodoListBar = styled.li`
  background-color: white;
  color: black;
  border-radius: 0px 7px 7px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
`;

interface Props {
  projects: ProjectType;
}

export default function Projects() {
  const { projects } = useProjects();
  const { todos } = useTasks();
  return (
    <TodoList>
      {projects.map((project) => (
        <TodoListBar key={project.id}>
          {project.projectName}
          <span>
            {todos.filter((todo) => project.id === todo.projectId).length}
          </span>
          <Buttons onClick={() => deleteProject(project.id)}>Delete</Buttons>
        </TodoListBar>
      ))}
    </TodoList>
  );
}
