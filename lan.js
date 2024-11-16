// Lan.js
import React from 'react';
import styled from 'styled-components';

// Container for the programming languages section
const LangContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  margin-top: 0.25rem;
`;

// Title styling
// Title styling with underline
const Title = styled.h4`
  font-size: 2rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 2.5rem; /* Adds space below the title */
  position: relative; /* Allows for positioning the underline */
  
  /* Add underline */
  &::after {
    content: '';
    position: absolute;
    bottom: -6px; /* Adjust the distance between the title and the underline */
    left: 0;
    width: 100%; /* Set width of the underline */
    height: 1px; /* Thickness of the underline */
    background-color: #3498db; /* Color of the underline */
  }
`;


// Individual language container
const LanguageContainer = styled.div`

  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
`;

// Individual language item
const Language = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled image for the logos
const LanguageLogo = styled.img`
  width: 155px;
  height: 150px;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Language name styling
const LanguageName = styled.span`
  font-size: 1.1rem;
  color: #ecf0f1;
`;

const Lan = () => {
  return (
    <LangContainer>
      <Title >Programming Languages</Title>
      <LanguageContainer>
      <Language>
          <LanguageLogo src="java.png" alt="Java" />
          <LanguageName>Java</LanguageName>
        </Language>
        <Language>
          <LanguageLogo src="html.jpg" alt="HTML" />
          <LanguageName>HTML</LanguageName>
        </Language>
        <Language>
          <LanguageLogo src="css.png" alt="CSS" />
          <LanguageName>CSS</LanguageName>
        </Language>
        <Language>
          <LanguageLogo src="javascript.png" alt="JavaScript" />
          <LanguageName>JavaScript</LanguageName>
        </Language>
        <Language>
          <LanguageLogo src="react.png" alt="React.js" />
          <LanguageName>React.js</LanguageName>
        </Language>
        <Language>
          <LanguageLogo src="mysql.jfif" alt="MySQL" />
          <LanguageName>MySQL</LanguageName>
        </Language>
      </LanguageContainer>
    </LangContainer>
  );
};

export default Lan;
