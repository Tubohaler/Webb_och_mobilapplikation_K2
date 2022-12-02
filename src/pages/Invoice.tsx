import React, { useState, useEffect } from "react";
import { postInvoice } from "../api/postInvoice";
import { getInvoices } from "../api/getInvoices";
import { deleteInvoice } from "../api/deleteInvoice";
import { getTimes } from "../api/getTimes";
import { getAllProjects } from "../api/getAllProjects";
import { getAllTasks } from "../api/getAllTasks";

import styled from "styled-components";
import { InvoiceType } from "../types/invoiceTypes";
import Modal from "../layout/Modal";
import { ProjectType } from "../types/projectTypes";
import { TaskType } from "../types/tasksTypes";

const ModuleName = styled.h1`
  text-align: left;
  font-size: 2em;
  margin-left: 0.7em;
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
  width: 70vw;
`;

interface Props {
  times: InvoiceType;
}

export default function Invoice() {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]); // hämta från Context istället
  const [selectedProject, setSelectedProject] = useState<number | undefined>();
  const [taskId, setTaskId] = useState<number | null>(null);

  async function getInvoiceData() {
    const data = await getInvoices();
    setInvoices(data);
  }

  async function getAllProjectData() {
    const data = await getAllProjects();
    setProjects(data);
  }

  async function selectedProjectID() {}

  function updateTaskId(id: number): void {
    setTaskId(id);
  }

  const test = {
    id: "3",
    status: "ej betald",
    due_date: "2020-12-15T10:49:33.081Z",
    amount: 100000,
    project: "<project id>",
    customer_name: "Ryan",
    created_date: "2022-11-16T10:49:33.081Z",
  };

  useEffect(() => {
    getInvoiceData();
    getAllProjectData();
  }, []);

  useEffect(() => {
    selectedProjectID();
  }, []);

  return (
    <div>
      <TodoList>
        {invoices.map((invoice) => (
          <TodoListBar key={invoice.id}>
            {invoice.amount}
            <Buttons onClick={() => deleteInvoice(invoice.id)}>Delete</Buttons>
            <Modal
              title={"create invoice"}
              //   active={active}
              active={true}
              //   hideModal={() => setActive(false)}
              hideModal={() => {
                return;
              }}
              footer={
                <Buttons
                  onClick={() => {
                    postInvoice(test);
                  }}
                >
                  Save invoice
                </Buttons>
              }
              projects={projects}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              taskId={taskId}
              updateTaskId={updateTaskId}
            />
            {/* <Buttons onClick={() => postInvoice(test)}>Send invoice</Buttons> */}
          </TodoListBar>
        ))}
      </TodoList>
    </div>
  );
}
