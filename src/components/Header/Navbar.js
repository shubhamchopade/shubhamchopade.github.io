import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-light.png";
import { StyledLink } from "../Layout/Layout";

const Ul = styled.ul`
  list-style: none;
  font-size: 15px;
  display: flex;
  text-decoration: none;

  li {
    font-family: "Poppins";
    padding: 0 0.5rem;
    width: 100%;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }

    a {
      text-decoration: none;
    color: white;
  
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }

  @media (max-width: 720px) {
    transition: transform 0.3s ease-in-out;
    margin: 1rem auto;
  }
`;

const HomeLink = styled(StyledLink)`
img {
  max-width: 250px;
  width: 50%;
  filter: invert(90%);
  transition: all 0.2s ease-in;

  &:hover {
    filter: invert(0%);
  }
}
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;


  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <HomeLink to='/'><img className="logo" alt="logo" src={logo}></img></HomeLink>
        

      <Ul>
        <li>
          <StyledLink to="/about">about</StyledLink>
        </li>
        <li>
          <StyledLink to="/projects">projects</StyledLink>
        </li>
        <li>
          <StyledLink to="/skills">skills</StyledLink>
        </li>
        <li>
          <a target="_blank" href="https://instagram.com/tech.sapien">
            instagram
          </a>
        </li>
      </Ul>
    </Container>
  );
};

export default Navbar;
