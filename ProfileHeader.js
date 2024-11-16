import React from 'react';
import styled, { keyframes } from 'styled-components';

// Container for profile header with fixed dimensions and background
const ProfileHeaderContainer = styled.div`
  display: flex;
   border-top: 1px solid #3498db;
  flex-direction: row; /* Arrange the profile image and text horizontally */
  align-items: center; /* Vertically center the profile image and text */
  text-align: left; /* Align text to the left */
  background: linear-gradient(135deg, #1e1e1e, #2d2d2d);
  padding: 5rem 5rem; /* Adjust padding for space inside the container */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  font-family: 'Roboto', sans-serif;
  width: 90%; /* Adjust width to make it slightly wider */
  
  height: 20vh; /* You can adjust the height based on your preference */
  margin-left: auto;
  margin-right: 2cm; /* Keep the container 2cm away from the right edge */
  justify-content: center; /* Center content vertically */
  position: relative;
`;

// Pulse animation keyframes for profile image
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(52, 152, 219, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(52, 152, 219, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(52, 152, 219, 0.7);
  }
`;

// Styled component for profile image with hover animation
const ProfileImage = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 60%;
  border: 4px solid rgba(52, 152, 219, 0.6);
  margin-right: 2rem; /* Add some space to the right of the image */
  animation: ${pulse} 3s infinite;
`;

// Profile name styling using Poppins font for a modern, professional feel
const ProfileName = styled.h1`
  font-family: 'Poppins', sans-serif; /* Use Poppins for the name */
  font-size: 2.5rem;
  font-weight: 700;
  color: #ecf0f1;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
`;

// Introduction section
const Introduction = styled.p`
  font-size: 1.1rem;
  color: #bdc3c7;
  margin: 0.5rem 0;
  max-width: 100%;
  line-height: 1.4;
`;

const ProfileHeader = () => (
  <ProfileHeaderContainer>
    {/* Profile Image */}
    <ProfileImage src="/pj.jfif" alt="Profile" />
    
    {/* Profile Text */}
    <div>
      {/* Profile Name */}
      <ProfileName>PoojaLakshmi D</ProfileName>

      {/* Introduction section */}
      <Introduction>
        A passionate Web Application Developer skilled in creating responsive and dynamic web solutions.
      </Introduction>
    </div>
  </ProfileHeaderContainer>
);

export default ProfileHeader;
