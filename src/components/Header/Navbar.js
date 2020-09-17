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

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  @media (max-width: 720px) {
    transition: transform 0.3s ease-in-out;
    margin: 1rem auto;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;

  img {
    max-width: 150px;
    width: 50%;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
          <img className="logo" alt="logo" src={logo}></img>
      </Link>

      <Ul>
        <li>
          <StyledLink to="/about">about</StyledLink>
        </li>
        <li>
          <StyledLink to="/projects">projects</StyledLink>
        </li>
        <li>
          <StyledLink to="/experience">experience</StyledLink>
        </li>
        <li>
          <StyledLink to="/skills">skills</StyledLink>
        </li>
        <li>
          <StyledLink to="/instagram">instagram</StyledLink>
        </li>
      </Ul>
    </Container>
  );
};

export default Navbar;
