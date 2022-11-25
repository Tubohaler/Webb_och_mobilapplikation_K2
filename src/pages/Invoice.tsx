import React, { useState, useEffect } from "react";
import { postInvoice } from "../api/postInvoice";
import { getInvoices } from "../api/getInvoices";
import { deleteInvoice } from "../api/deleteInvoice";
import { getTimes } from "../api/getTimes";
import { getAllProjects } from "../api/getAllProjects";
import { getAllTasks } from "../api/getAllTasks";

import styled from "styled-components";
import { InvoiceType } from "../types/invoiceTypes";

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
  width: 70vw;
`;

interface Props {
  times: InvoiceType;
}

export default function Invoice() {
  const [prices, setprice] = useState<InvoiceType[]>([]);

  async function getInvoiceData() {
    const data = await getInvoices();
    setprice(data);
  }

  useEffect(() => {
    getInvoiceData();
  }, []);

  return (
    <div>
      <TodoList>
        {prices.map((price) => (
          <TodoListBar key={price.id}>
            {price.amount}

            <Buttons onClick={() => deleteInvoice(price.id)}>Delete</Buttons>
          </TodoListBar>
        ))}
      </TodoList>
      <Buttons onClick={() => postInvoice()}>Send invoice</Buttons>
    </div>
  );
}
