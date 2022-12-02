import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.svg";

import styled from "styled-components";

import Projects from "./Projects";
import { getAllTasks } from "../api/getAllTasks";
import Tasks from "./Tasks";
import Times from "./Times";
import Invoice from "./Invoice";
import { TaskContext } from "../contexts/TaskContext";

type Props = {};

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLogo = styled.img<Props>`
  width: 10rem;
  position: static;
  top: 0;
  margin-left: 7rem;
  margin-top: 1rem;
`;

const OverviewBox = styled.div`
  top: 0;
  width: 90vw;
  height: 18rem;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  background: rgba(0, 0, 0, 0.69);
  border-radius: 35px;
  margin-left: 1.2rem;
`;

const OverviewTitle = styled.h2`
  position: static;
  top: 0;
  margin-left: 1.2rem;
  color: black;
  font-size: 1.3rem;
`;

const OverviewProjectsTitle = styled.h5``;

const OverviewProjectsSmallBox = styled.div`
  width: 6rem;
  height: 7rem;
  background: #a931b4;
  margin-left: 3rem;
  border-radius: 10px;
`;

const OverviewTasksSmallBox = styled.div`
  width: 6rem;
  height: 7rem;
  background: #126923;
  margin-left: 3rem;
  border-radius: 10px;
`;

const OverviewTimerSmallBox = styled.div`
  width: 6rem;
  height: 7rem;
  background: #b53a4d;
  margin-left: 3rem;
  border-radius: 10px;
`;

const OverviewInvoiceSmallBox = styled.div`
  width: 6rem;
  height: 7rem;
  background: #5c28b5;
  margin-left: 3rem;
  border-radius: 10px;
`;

const ProjectsBox = styled.div`
  position: static;
  margin-left: 1.2rem;
  padding: 1.5em;

  width: 80vw;
  background: #a931b4;
  border-radius: 35px;
  overflow: auto;
  height: 19em;
`;

const ProjectsTitle = styled.h2`
  position: static;
  top: 0;
  margin-left: 1.2rem;
  font-size: 1.3rem;
  color: black;
`;

const TasksTitle = styled.h2`
  position: static;
  top: 0;
  margin-left: 1.2rem;
  font-size: 1.3rem;
  color: black;
`;

const TasksBox = styled.div`
  position: static;
  margin-left: 1rem;
  padding: 1.5em;

  width: 80vw;
  background: #126923;
  border-radius: 35px;
  overflow: auto;
  height: 19em;
`;

const TimerTitle = styled.h2`
  position: static;
  top: 0;
  margin-left: 1.2rem;
  font-size: 1.3rem;
  color: black;
`;

const TimerBox = styled.div`
  position: static;
  margin-left: 1rem;
  padding: 1.5em;

  width: 80vw;
  height: 19em;
  background: #b53a4d;
  border-radius: 35px;
  overflow: auto;
`;

const InvoicesTitle = styled.h2`
  position: static;
  top: 0;
  margin-left: 1.2rem;
  font-size: 1.3rem;
  color: black;
`;

const InvoicesBox = styled.div`
  position: static;
  margin-left: 1.2rem;

  width: 90vw;
  height: 10rem;
  background: #5c28b5;
  border-radius: 35px;
`;

export default function Overview({}: Props) {
  const { updateTodos } = useContext(TaskContext);
  useEffect(() => {
    const data = getAllTasks();
    updateTodos(data);
  }, []);
  return (
    <StyledWrapper>
      <div>
        <StyledLogo src={logo} className="logo" alt="logo" />
      </div>
      <OverviewTitle>Overview</OverviewTitle>
      <OverviewBox>
        <OverviewProjectsSmallBox>Projects</OverviewProjectsSmallBox>
        <OverviewTasksSmallBox>Tasks</OverviewTasksSmallBox>
        <OverviewTimerSmallBox>Timer</OverviewTimerSmallBox>
        <OverviewInvoiceSmallBox>Invoice</OverviewInvoiceSmallBox>
      </OverviewBox>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsBox>
        <Projects />
      </ProjectsBox>
      <TasksTitle>Tasks</TasksTitle>
      <TasksBox>
        {" "}
        <Tasks />
      </TasksBox>
      <TimerTitle>Timer</TimerTitle>
      <TimerBox>
        <Times />
      </TimerBox>
      <InvoicesTitle>Invoices</InvoicesTitle>
      <InvoicesBox>
        <Invoice />
      </InvoicesBox>
    </StyledWrapper>
  );
}
