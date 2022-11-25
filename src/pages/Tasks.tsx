import React, { useState, useEffect } from "react";
import { getAllTasks } from "../api/getAllTasks";
import { deleteTasks } from "../api/deleteTasks";
import { TaskType } from "../types/tasksTypes";
// import { ProjectType } from "../types/projectTypes";
import styled from "styled-components";
// import { ProjectContext } from "../contexts/ProjectContext";

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
const TodoColor = styled.div`
  background-color: ${(props) => props.color};
  height: 3.7em;
`;

interface Props {
  tasks: TaskType;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  //   const [projects, setProjects] = useState<ProjectType[]>([]);

  async function getTasksData() {
    const data = await getAllTasks();
    setTasks(data);
  }

  useEffect(() => {
    getTasksData();
  }, []);
  console.log(tasks);

  return (
    <TodoList>
      {tasks.map((task) => (
        <TodoListBar key={task.id}>
          {/* <TodoColor color={task.projectId}>...</TodoColor> */}
          {task.title}
          <Buttons onClick={() => deleteTasks(task.id)}>Delete</Buttons>
        </TodoListBar>
      ))}
    </TodoList>
  );
}
