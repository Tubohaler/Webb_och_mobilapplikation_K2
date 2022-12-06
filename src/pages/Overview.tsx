import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.svg";

import styled from "styled-components";

import Projects from "./Projects";
import { getAllTasks } from "../api/getAllTasks";
import Tasks from "./Tasks";
import Times from "./Times";
import Invoice from "./Invoice";
import { TaskContext, useTasks } from "../contexts/TaskContext";
import { useProjects } from "../contexts/ProjectContext";
import { useTimeLogs } from "../contexts/TimeContext";
import { useInvoices } from "../contexts/InvoiceContext";

import dayjs from "dayjs";

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
  const { projects } = useProjects();
  const { todos } = useTasks();
  const { times } = useTimeLogs();
  const { invoices } = useInvoices();

  const today = dayjs();

  const pastMonth = today.subtract(30, "days");

  const filteredTimeLogs = times.filter((timelog) =>
    pastMonth.isBefore(timelog.start, "days")
  );

  const summedTime = filteredTimeLogs.reduce((acc, time) => {
    const date1 = dayjs(time.end);
    const date2 = dayjs(time.start);
    const hours: number = date1.diff(date2, "hours", true);
    return acc + hours;
  }, 0);

  // const pastYear = dayjs().year(2022)

  const invoiceSum = invoices.map((invoice) => invoice.amount);

  const allInvoiceSum = invoiceSum.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return (
    <StyledWrapper>
      <div>
        <StyledLogo src={logo} className="logo" alt="logo" />
      </div>
      <OverviewTitle>Overview</OverviewTitle>

      <OverviewBox>
        <OverviewProjectsSmallBox>
          Total projects:{projects.length}
        </OverviewProjectsSmallBox>
        <OverviewTasksSmallBox>
          {" "}
          Total tasks:{todos.length}
        </OverviewTasksSmallBox>
        <OverviewTimerSmallBox>
          Total hours:
          {summedTime.toFixed(0)}
        </OverviewTimerSmallBox>
        <OverviewInvoiceSmallBox>
          Total invoice:{invoices.length}
        </OverviewInvoiceSmallBox>
        <OverviewInvoiceSmallBox>
          Total amount invoiced this year:{allInvoiceSum.toFixed(0)}kr
        </OverviewInvoiceSmallBox>
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
