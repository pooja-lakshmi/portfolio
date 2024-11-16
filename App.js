import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled from 'styled-components';
import Lan from './components/lan';

// Global styling for the entire page
const AppContainer = styled.div`
  background-color: #121212;  // Dark background for the page
  color: #ecf0f1;  // Light text color for contrast
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;  // Align sections vertically
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-bottom: 1rem;
`;

// Main App component rendering sections
const App = () => (
  <AppContainer>
    <SectionContainer><ProfileHeader /></SectionContainer>
    <SectionContainer><Achievements /></SectionContainer>
    <SectionContainer><Lan /></SectionContainer>
    <SectionContainer><Projects /></SectionContainer>
    <SectionContainer><Contact /></SectionContainer>
  </AppContainer>
);

export default App;
