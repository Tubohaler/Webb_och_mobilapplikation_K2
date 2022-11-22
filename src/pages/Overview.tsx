import React from "react";
import logo from "../assets/logo.svg";

import styled from "styled-components";

type Props = {};

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLogo = styled.img<Props>`
  width: 10rem;
  position: fixed;
  top: 0;
  margin-left: 7rem;
  margin-top: 1rem;
`;

const OverviewBox = styled.div`
  position: fixed;
  top: 0;
  margin-top: 5rem;
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
  position: fixed;
  top: 0;
  margin-top: 3.4rem;
  margin-left: 1.2rem;

  font-size: 1.3rem;
`;

const OverviewProjectsTitle = styled.h5`
  margin-left: 2rem;
`;

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
  position: absolute;
  margin-top: 5rem;
  margin-left: 1.2rem;

  width: 90vw;
  height: 10rem;
  background: #a931b4;
  border-radius: 35px;
`;

const ProjectsTitle = styled.h2`
  position: fixed;
  top: 0;
  margin-top: 24rem;
  margin-left: 1.2rem;
  font-size: 1.3rem;
`;

export default function Overview({}: Props) {
  return (
    <StyledWrapper>
      <div>
        <StyledLogo src={logo} className="logo" alt="logo" />
      </div>
      <OverviewTitle>Overview</OverviewTitle>
      <OverviewBox className="overview">
        <OverviewProjectsSmallBox className="overviewProjects">
          <OverviewProjectsTitle>Projects</OverviewProjectsTitle>
        </OverviewProjectsSmallBox>
        <OverviewTasksSmallBox>Tasks</OverviewTasksSmallBox>
        <OverviewTimerSmallBox>Timer</OverviewTimerSmallBox>
        <OverviewInvoiceSmallBox>Invoice</OverviewInvoiceSmallBox>
      </OverviewBox>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsBox className="projectsBox"></ProjectsBox>
    </StyledWrapper>
  );
}
