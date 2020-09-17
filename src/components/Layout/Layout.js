import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 1rem;
  min-height: 80vh;

  @media (min-width: 720px){
    justify-content: center;
  }
  }
`;

export const H1 = styled.h1`
  font-size: 4rem;
  color: #e0e0e0;
  font-family: Poppins;
`;

export const H2 = styled.h2`
  font-weight: normal;
  font-size: 3rem;
  color: #e0e0e0;
  font-family: Poppins;

  @media (max-width: 720px) {
    font-size: 1.8rem;
  }
`;
export const H3 = styled.h3`
  font-weight: normal;
  font-size: 2.5rem;
  color: #e0e0e0;
  font-family: Poppins;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;
export const H4 = styled.h4`
  font-weight: normal;
  font-size: 2rem;
  color: #e0e0e0;
  font-family: Poppins;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;
export const P = styled.p`
  font-weight: normal;
  font-size: 1rem;
  color: #e0e0e0;
  font-family: Poppins;
`;

export const PrimaryButton = styled.button`
  background-color: #4c597b;
  margin-top: 1.5rem;
  padding: 0.5rem;
  color: white;
  width: 100px;
  border-radius: 5px;
  opacity: 0.9;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const SPAN = styled.span`
  color: white;
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.1em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;

  &:hover {
    background-size: 100% 88%;
  }
`;

export const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
      marginTop: 10,
    }}
  />
);
