import React from "react";
import styled from "styled-components";
import { Layout, H1, H2, P, H3 } from "../components/Layout/Layout";
import shubham from "../assets/logo/shubham.png";
import {Link} from 'react-router-dom'

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-around;

  P{
    max-width: 400px;
  }

  div {
    margin: auto;
  }

  img {
    width: 400px;
    border-radius: 30%;
    margin-left: 1rem;
  }

  @media (max-width: 720px) {
    flex-direction: column-reverse;

    P {
      margin: 1rem 0;
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
  justify-content: space-between;
  max-width: 300px;

  li {
    color: white;
  }
`;

const About = () => {
  return (
    <Layout>
      <H1>About</H1>
      <ImgContainer>
        <P>
          I am Shubham Chopade, an Engineer by profession and an educator by
          passion. I completed my undergraduate degree in Electronics and
          Telecommunication Engineering from Savitribai Phule Pune University
          (SPPU) located in Pune. <br /><br /> I write code and conduct workshops for living.
          Currently, I am self employed and trying to build a community for
          beginners who are new to programming.
          <Link to='/songs'>My Favorite Songs</Link>
        </P>
        <div>
          <img src={shubham} alt=""></img>
        </div>
      </ImgContainer>
      <H2>Social Media</H2>
      <AboutSocial>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Github</li>
      </AboutSocial>
    </Layout>
  );
};

export default About;
