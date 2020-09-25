import React from "react";
import { FaReact } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  align-items: center;

  p {
    margin: auto;
    color: darkgrey;
    
  }
`;
const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <p>Copyright &copy; {currentYear} Shubham Chopade</p>
        <p>Made with ❤ using <FaReact color='skyblue' /></p>
      </StyledFooter>
    </div>
  );
};

export default Footer;
