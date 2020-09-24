import React from "react";
import styled from "styled-components";
import { data } from "./projectsData";
import { H1, H3, P, Layout } from "../../components/Layout/Layout";


const Section = styled.section`
  display: flex;

  div {
    margin: 1rem auto;
    postion: relative;
  }

  img {
    margin: auto;
    width: 300px;
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
  @media (max-width: 600px) {
    flex-direction: column;

    img {
      background-size: cover;
    }

    H3,
    P,
    code {
      margin-left: auto;
    }
  }
`;

const P1 = styled(P)`
  margin-top: 1rem;
`

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
            <P1>{obj.description}</P1>
          </div>
        </Section>
      ))}
    </Layout>
  );
};

export default ProjectsComponent;
