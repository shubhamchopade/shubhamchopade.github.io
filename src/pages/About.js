import React from "react";
import styled from "styled-components";
import { Layout, H1, H2, P, H3, SPAN } from "../components/Layout/Layout";
import shubham from "../assets/logo/shubham.png";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const iconData = [
  {
    icon: <FaFacebook />,
    color: "skyblue",
  },
  { icon: <FaInstagram />, color: "green" },
  { icon: <FaGithub /> },
];

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-around;

  P {
    max-width: 400px;
    margin: 2rem 0;
  }

  div {
    margin: auto;
  }

  img {
    width: 300px;
    border-radius: 30%;
    margin-left: 1rem;
    filter: hue-rotate(20deg);
    transition: all 0.2s ease-in;

    &:hover {
      filter: hue-rotate(0deg);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;

    P {
      margin: 2rem 0 1rem 0;
    }

    img {
      width: 200px;
      border-radius: 30%;
    }
  }
`;

const AboutSocial = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  max-width: 300px;
  margin: 1rem 0;

  li {
    color: white;
    transform: scale(1.5);
    transition: all 0.25s ease-in;

    &:hover {
      color: skyblue;
      transform: scale(1.6);
    }
  }
`;

const About = () => {
  return (
    <Layout>
      <H1>About</H1>
      <ImgContainer>
        <P>
          I am <SPAN>Shubham Chopade</SPAN>, an Engineer by profession and an
          educator by passion. I completed my undergraduate degree in
          Electronics and Telecommunication Engineering from Savitribai Phule
          Pune University (SPPU) located in Pune. <br />
          <br /> I write code and conduct workshops for living. Currently, I am
          self employed and trying to build a community for beginners who are
          new to programming.
        </P>
        <div>
          <img src={shubham} alt=""></img>
        </div>
      </ImgContainer>
      <H2>Social Media</H2>
      <AboutSocial>
        {iconData.map((icon) => (
          <li>{icon.icon}</li>
        ))}
      </AboutSocial>
    </Layout>
  );
};

export default About;
