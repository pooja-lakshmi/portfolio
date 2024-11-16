import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for the title (fade-in effect on hover)
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Main container with a light-dark theme
const MainContainer = styled.div`
  background-color: #1e1e1e;  // Dark background
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.4);
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #ecf0f1;
`;

// Laptop element styling
const LaptopContainer = styled.div`
  position: relative;
  width: 320px;
  height: 220px;
  background-color: #34495e;  // Darker gray for laptop screen
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 8px;
    background-color: #1e1e1e;
    border-radius: 15px 15px 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 12px;
    background-color: #1e1e1e;
    border-radius: 0 0 5px 5px;
  }
`;

// Project title styling centered within the laptop screen
const ProjectTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  ${LaptopContainer}:hover & {
    opacity: 1;
  }
`;

const ProjectsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Project = ({ title }) => (
  <LaptopContainer>
    <ProjectTitle>{title}</ProjectTitle>
  </LaptopContainer>
);

const Projects = () => (
  <MainContainer>
    <h2 style={{ marginBottom: '1rem' }}>Projects</h2>
    <ProjectsRow>
      <Project title="Online Course Registration System" />
      <Project title="Bus Ticket Reservation System" />
      <Project title="Lift Management System" />
    </ProjectsRow>
  </MainContainer>
);

export default Projects;
