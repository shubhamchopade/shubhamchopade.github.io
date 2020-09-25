import React from "react";
import styled from "styled-components";
import {
  Layout,
  H1,
  H3,
  H4,
  P,
  SPAN,
  PrimaryButton,
  ColoredLine,
  StyledLink,
} from "../components/Layout/Layout";
import { IconContext } from "react-icons";
import { FaHamburger, FaUikit, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const HomeLayout = styled(Layout)`
  margin-top: 3rem;
  cursor: default;

  H3 {
    max-width: 600px;
  }
`;

const AnimatedH1 = styled(motion.h1)`
  color: white;
`;

const StyledServiceContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledService = styled.div`
  background: #0f222f;
  padding: 1rem;
  margin: 5px;
  flex: 1 1 220px;
  cursor: default;

  &:hover {
    transform: scale(1.02);
    background: #0b293c;

    div {
      color: blue;
    }
  }

  div {
    display: flex;
    color: white;
    justify-content: space-evenly;
    align-items: center;

    H3 {
      margin-left: 1rem;
      line-height: 100%;
      text-transform: uppercase;
    }
  }

  P {
    margin-top: 1rem;
  }
`;

const serviceData = [
  {
    title: "Website Development",
    icon: <FaHamburger />,
    description:
      "Developing highly scalable websites. Designing responsive websites using ReactJS",
  },
  {
    title: "UI/UX Design",
    icon: <FaUikit />,
    description:
      "Developing highly scalable websites. Designing responsive websites using ReactJS",
  },
  {
    title: "Instagram Growth",
    icon: <FaInstagram />,
    description:
      "Developing highly scalable websites. Designing responsive websites using ReactJS",
  },
];

const Home = () => {
  return (
    <>
      <HomeLayout>
        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <AnimatedH1>Hi,</AnimatedH1>

          <H3>
            I am <SPAN>Shubham Chopade.</SPAN>
            <br /> a web designer/developer based in Pune, India. I love
            creating things for web.
          </H3>
          <PrimaryButton>Let's talk</PrimaryButton>
          {/* using inline styling to put upper margin */}
          <H3
            style={{
              marginTop: "4rem",
              marginBottom: "4rem",
            }}
          >
            I can <SPAN>help</SPAN> you with
          </H3>
          <StyledServiceContainer>
            {serviceData.map((elem) => (
              <StyledService>
                <div>
                  {elem.icon}
                  <H3>{elem.title}</H3>
                </div>
                <ColoredLine color="#BDBDBD" />
                <P>{elem.description}</P>
              </StyledService>
            ))}
          </StyledServiceContainer>
        </IconContext.Provider>

        <H4 style={{ marginTop: 50, marginLeft: "auto", display: "block" }}>
          <StyledLink to="/projects">SEE MY PROJECTS</StyledLink> <span>→</span>
        </H4>
      </HomeLayout>
    </>
  );
};

export default Home;
