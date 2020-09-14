import React from "react";
import styled from "styled-components";
import { data } from "./projectsData";
import { H1, H3, P, Layout } from "../../components/Layout/Layout";

const Section = styled.section`
  display: flex;

  div {
    margin: 1rem auto;
  }

  img {
    margin: auto;
  }

  H3,
  P,
  code {
    margin-left: 2rem;
  }

  code {
    color: violet;
    margin-bottom: 0.7rem;
  }
  @media (max-width: 720px) {
    flex-direction: column;

    H3,
    P,
    code {
      margin-left: auto;
    }

    img {
      background: violet;
    }
  }
`;

const ProjectsComponent = () => {
  return (
    <Layout>
      {data.map((obj) => (
        <Section>
          <div>
            <img src={obj.img}></img>
          </div>
          <div>
            <H3>{obj.name}</H3>
            <code>{obj.tags}</code>
            <P>{obj.description}</P>
          </div>
        </Section>
      ))}
    </Layout>
  );
};

export default ProjectsComponent;
