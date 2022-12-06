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
import { useInvoices } from "../contexts/InvoiceContext";

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

export default function Invoice() {
  const [selectedProject, setSelectedProject] = useState<number | undefined>();
  const [taskId, setTaskId] = useState<number | null>(null);
  const [active, setActive] = useState<boolean>(false);
  const { invoices } = useInvoices();

  function updateTaskId(id: number): void {
    setTaskId(id);
  }

  return (
    <div>
      <Buttons onClick={() => setActive(true)}>Create invoice</Buttons>
      <TodoList>
        {invoices.map((invoice) => (
          <TodoListBar key={invoice.id}>
            <span>{invoice.customer_name}/</span>
            <span>
              {invoice.due_date}/{invoice.amount}kr
            </span>
            <span>{invoice.status}</span>
            <Buttons onClick={() => invoice.id && deleteInvoice(invoice.id)}>
              Delete
            </Buttons>
          </TodoListBar>
        ))}
      </TodoList>
      <Modal
        title={"create invoice"}
        hideModal={() => setActive(false)}
        active={active}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        taskId={taskId}
        updateTaskId={updateTaskId}
      />
    </div>
  );
}
