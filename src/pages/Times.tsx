import React, { useState, useEffect } from "react";
import { getTimes } from "../api/getTimes";
import { deleteTimes } from "../api/deleteTimes";
import { TimesType } from "../types/timesTypes";

import styled from "styled-components";

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
  times: TimesType;
}

export default function Times() {
  const [times, setTimes] = useState<TimesType[]>([]);

  async function getTimeData() {
    const data = await getTimes();
    setTimes(data);
  }

  useEffect(() => {
    getTimeData();
  }, []);

  return (
    <TodoList>
      {times.map((time) => (
        <TodoListBar key={time.id}>
          {time.start}
          {time.end}
          <Buttons onClick={() => deleteTimes(time.id)}>Delete</Buttons>
        </TodoListBar>
      ))}
    </TodoList>
  );
}
