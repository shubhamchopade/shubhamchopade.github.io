import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import circle from '../assets/graphics/home-circle.svg'
import {Layout, H1, H2, H3} from '../components/Layout/Layout'

const Img = styled.img`
  position: absolute;
  right: 5%;
  bottom: 5%;
  width: 20%;
`

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
        <H1>Hi,</H1>
        <H3>
          I am a web designer/developer based in Pune, India. I love creating
          things for web.
        </H3>
        {/* <Img src={circle} alt=''></Img> */}
      </Layout>
    </>
  );
};

export default Home;
