import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo/logo-light.png";

const Ul = styled.ul`
  list-style: none;
  font-size: 15px;
  display: flex;

  li {
    color: #fff;
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
  margin: 1rem auto;

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
      <img className="logo" alt='logo' src={logo}></img>
      <Ul>
        <li>
          <a>about</a>
        </li>
        <li>
          <a>projects</a>
        </li>
        <li>
          <a>experience</a>
        </li>
        <li>
          <a>skills</a>
        </li>
        <li>
          <a>instagram</a>
        </li>
      </Ul>
    </Container>
  );
};

export default Navbar;
