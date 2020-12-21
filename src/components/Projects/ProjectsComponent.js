import React from "react";
import styled from "styled-components";
import { data } from "./projectsData";
import { H1, H3, P, Layout } from "../../components/Layout/Layout";

const Section = styled.section`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;

  &:hover {
    background-color: #2e5077;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 1, 0.2), 0 6px 20px 0 rgba(0, 2, 0, 0.19);
    transform: scale(1.01);
  }
  &:active,
  &:focus {
    background-color: #284567;
    transform: scale(1);
  }

  div {
    margin: 1rem auto;
    width: 30rem;
  }

  img {
    width: 16rem;
    margin: auto;
  }

  code {
    color: violet;
    margin-bottom: 0.7rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;

    div {
      margin: 1rem auto;
      width: 20rem;
    }

    img {
      background-size: cover;
    }
  }
`;

const P1 = styled(P)`
  margin-top: 1rem;
`;

const ProjectsComponent = () => {
  return (
    <Layout>
      {data.map((obj) => (
        <a href={obj.link}>
          <Section>
            <div>
              <img src={obj.img}></img>
            </div>
            <div>
              <H3>{obj.name}</H3>
              <code>{obj.tags}</code>
              <P1>{obj.description}</P1>
            </div>
          </Section>{" "}
        </a>
      ))}
    </Layout>
  );
};

export default ProjectsComponent;
