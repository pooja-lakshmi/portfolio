import React from 'react';
import styled, { keyframes } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

// Fade-in animation for content
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Container for achievements section
const AchievementsContainer = styled.div`
  padding: 3rem 4rem;
  background-color: #2c3e50;
  animation: ${fadeIn} 1s ease-in-out;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
`;

// Section title
const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  color: #ecf0f1;
  margin-bottom: 2rem;
  border-bottom: 3px solid #3498db;
  padding-bottom: 1rem;
`;

// Individual achievement item
const AchievementItem = styled.div`
  background-color: #34495e;
  border-radius: 10px;
  padding: 1.8rem;
  margin-bottom: 1.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.2rem;
  color: #ecf0f1;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    transform: translateY(-6px);
  }
`;

// Icon styling for professional icons
const Icon = styled.i`
  font-size: 2.5rem;
  color: #3498db;
  display: inline-block;
  min-width: 40px;
  text-align: center;
`;

// Achievement text styling
const AchievementText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ecf0f1;
  margin: 0;
  text-align: left;
`;

// Achievements component
const Achievements = () => (
  <AchievementsContainer>
    <Title>Achievements & Participations</Title>
    <AchievementItem>
      <Icon className="fa fa-trophy" aria-hidden="true"></Icon>
      <AchievementText>1st Prize in Web Design Competition</AchievementText>
    </AchievementItem>
    <AchievementItem>
      <Icon className="fa fa-cogs" aria-hidden="true"></Icon>
      <AchievementText>IEEE Project Expo Participant</AchievementText>
    </AchievementItem>
   
    <AchievementItem>
      <Icon className="fa fa-laptop" aria-hidden="true"></Icon>
      <AchievementText>Java Full Stack Certification (Wipro)</AchievementText>
    </AchievementItem>
    <Title>Extracurricular Activities</Title>
    <AchievementItem>
      
      <Icon className="fa fa-camera" aria-hidden="true"></Icon>
      <AchievementText>3rd Prize in District Level Photography</AchievementText>
    </AchievementItem>
  </AchievementsContainer>
);

export default Achievements;
