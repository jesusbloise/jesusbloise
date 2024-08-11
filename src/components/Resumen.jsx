import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import profilePic from '../assets/jesus1.png';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaBootstrap, FaPython
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiOracle } from 'react-icons/si';

// Keyframes for bouncing animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const getAnimationDelay = (index) => {
  return css`
    animation-delay: ${index * 0.2}s;
  `;
};

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0a0a23;
  position: relative;
  background: url('/background.jpg') no-repeat center center fixed;
  background-size: cover;
  background-blur: 2px;
  margin-bottom: -10rem;s
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid white;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const ContentContainer = styled.div`
  text-align: center;
  background: #EEEDED;
  padding: 1rem;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.5rem 0 2rem;
  color: #333;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0a0a23;
  animation: ${bounce} 2s infinite;
  ${(props) => getAnimationDelay(props.index)}
`;

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs size={40} color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
  { name: 'SQL', icon: <FaDatabase size={40} color="#4479A1" /> },
  { name: 'Express', icon: <SiExpress size={40} color="#000000" /> },
  { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} color="#007ACC" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} color="#7952B3" /> },
  { name: 'Python', icon: <FaPython size={40} color="#3776AB" /> },
  { name: 'Oracle', icon: <SiOracle size={40} color="#F80000" /> },
];

const Resumen = () => (
  <SectionContainer id="resumen">
    <ProfileImage src={profilePic} alt="Perfil de Jesus Bloise" />
    <ContentContainer>
      <Title>¡Hola. soy Jesus Bloise!</Title>
      <Subtitle>Soy Software Engineer con más de 3 años de experiencia en la industria TI.</Subtitle>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill key={index} index={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </Skill>
        ))}
      </SkillsContainer>
    </ContentContainer>
  </SectionContainer>
);

export default Resumen;
