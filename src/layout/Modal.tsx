import React, { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import Select from "react-select";
// import { ProjectContext } from "../contexts/ProjectContext";
// import { getAllProjects } from "../api/getAllProjects";
import { ProjectType } from "../types/projectTypes";
import { TaskContext } from "../contexts/TaskContext";
import { TaskType } from "../types/tasksTypes";
import { useTasks } from "../contexts/TaskContext";
import { useProjects } from "../contexts/ProjectContext";

const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

const ModalBody = styled.div`
  overflow-y: auto;
  padding: 10px 10px;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

const ModalTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: center;
  margin-bottom: 3rem;
`;

const InputNewTodo = styled.input`
  text-align: center;
  max-width: 15em;
  height: 2em;
`;

const NameLabel = styled.label`
  color: black;
  padding: 0.3rem;
`;

const ProjectInput = styled.input`
  max-width: 15em;
  height: 2em;
`;

const ModalInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem;
  color: black;
`;

const Buttons = styled.button`
  font-size: 2em;
  color: white;
  background-color: rgba(255, 53, 41, 0.56);
  margin: 0.2em;
  margin-left: 0.5em;
  padding: 0.25em 1em;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

interface ModalProps {
  title: string;
  footer: JSX.Element;
  children?: React.ReactNode;
  active: boolean;
  hideModal: () => void;
  projects: ProjectType[];
  selectedProject: number | undefined;
  setSelectedProject: (projectId: number) => void;
  taskId: number | null;
  updateTaskId: (id: number) => void;
}

const Modal = ({
  title,
  footer,
  children,
  active,
  hideModal,
  projects,
  selectedProject,
  setSelectedProject,
  taskId,
  updateTaskId,
}: ModalProps) => {
  const { todos } = useTasks();
  const { oneProject } = useProjects();
  const [selectedTask, setSelectedTask] = useState<number>();

  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              {/* <ModalTitle>{title}</ModalTitle> */}
              <ModalClose onClick={() => hideModal()}>X</ModalClose>
            </ModalHeader>
            <ModalInputDiv>
              <ModalName>Invoice</ModalName>
              <NameLabel>Customer name</NameLabel>
              <input type="text"></input>
              <NameLabel>Project connected to task:</NameLabel>
              <Select
                placeholder="select project"
                value={projects.find(
                  (project) => project.projectId === selectedProject
                )}
                options={projects}
                onChange={(obj) => {
                  console.log(obj);
                  if (obj === null) return;
                  setSelectedProject(obj.projectId);
                }}
                getOptionLabel={(x) => x.projectName}
                // getOptionValue={(x) => x.projectId}
              />
              {/* <br /> */}
              <NameLabel>Task:</NameLabel>
              <Select
                placeholder="select tasks"
                options={todos.filter(
                  (todo) => todo.projectId === selectedProject
                )}
                onChange={(e) => {
                  if (!e) return;
                  setSelectedTask(e.id);
                }}
                getOptionLabel={(y) => y.title}
              />
              <NameLabel>Unit</NameLabel>

              <input type="number"></input>
              <NameLabel>sek/Unit</NameLabel>
              <input type="number"></input>
            </ModalInputDiv>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default Modal;
