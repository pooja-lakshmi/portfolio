import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';  // Importing LinkedIn and GitHub icons

// Slow down the pulse animation
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Dark-themed Contact container with rounded corners
const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
  // background-color: #1c1c1c;  // Dark background color
  // color: #ecf0f1;  // Light text color
  // border-top: 1px solid #3498db;  // Accent border color
  // animation: ${pulse} 4s infinite;  // Slower pulse animation
  // border-radius: 15px;  // Rounded corners for the container
  // width: 100%;
  // max-width: 1150px;  // Maximum width to keep it from becoming too wide
  // margin: auto;
  // box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);  // Subtle shadow for a floating effect

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-size: 1.2rem;
    color: #3498db;  // Accent color for the text
    margin-bottom: 1.5rem;
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #3498db;  // Match icon color with text
    transition: all 0.3s ease;
  }

  // Links container
  .links {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;  // Stack links vertically
    gap: 1.5rem;
    align-items: center;  // Center align the links
  }

  .links a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #3498db;  // Link color
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #2980b9;  // Change color on hover
    }
  }
`;

const Contact = () => (
  <ContactContainer>
    <h3>Contact Me</h3>
    <div className="links">
      <a href="mailto:poojashree27102002@gmail.com"><FiMail />poojashree27102002@gmail.com</a>
      <a href="https://www.linkedin.com/in/pooja-lakshmi-t-803670214/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> LinkedIn
      </a>
      <a href="https://github.com/pooja-lakshmi" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
    </div>
  </ContactContainer>
);

export default Contact;
