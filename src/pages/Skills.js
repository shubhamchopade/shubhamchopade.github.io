import React from "react";
import {
  Layout,
  H1,
  H2,
  H3,
  H4,
  P,
  SPAN,
  PrimaryButton,
  ColoredLine,
} from "../components/Layout/Layout";
import { IconContext } from "react-icons";
import { FaHtml5, FaCss3, FaReact, FaGithub, FaFigma, FaMarkdown } from "react-icons/fa";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  flex-flow: wrap;
  text-align: center;

  div {
    margin: 0 1rem;
  }
`;

const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`;
const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;

const skillsData = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    icon: <FaCss3 />,
  },
  {
    title: "React",
    icon: <FaReact />,
  },
  {
    title: "Github",
    icon: <FaGithub />,
  },
  {
    title: "HTML",
    icon: <FaHtml5 />,
  },
  {
    title: "Figma",
    icon: <FaFigma />,
  },
  {
    title: "Markdown",
    icon: <FaMarkdown />,
  },
];

const Skills = () => {
  return (
    <Section>
      <IconContext.Provider value={{ color: "white", size: "5em" }}>
        {skillsData.map((skill) => (
          <div>
            {skill.icon}
            <H4>{skill.title}</H4>
          </div>
        ))}
      </IconContext.Provider>
    </Section>
  );
};

export default Skills;
