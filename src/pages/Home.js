import React from "react";
import styled from "styled-components";
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
import { FaBeer, FaHamburger, FaUikit, FaInstagram } from "react-icons/fa";

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
  cursor: pointer;

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
  }
];

const Home = () => {
  return (
    <>
      <Layout>
        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <H1>Hi,</H1>
          <H3>
            I am <SPAN>Shubham Chopade.</SPAN><br /> a web designer/developer based in Pune, India. I love creating
            things for web.
          </H3>
          <PrimaryButton>Let's talk</PrimaryButton>
          {/* using inline styling to put upper margin */}
          <P style={{ marginTop: "4rem", marginBottom: "4rem", backgroundColor: '#385F79' }}>
            <u>I can help you with</u>
          </P>
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
        <H4 style={{marginTop: 50, marginLeft: 'auto'}}>SEE MY PROJECTS <span>→</span></H4>
      </Layout>
    </>
  );
};

export default Home;
