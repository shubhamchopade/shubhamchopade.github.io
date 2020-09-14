import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 1rem;
  min-height: 80vh;
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

  @media (max-width: 720px){
    font-size: 1.8rem;
  }
`;
export const H3 = styled.h3`
  font-weight: normal;
  font-size: 2.5rem;
  color: #e0e0e0;
  font-family: Poppins;

  @media (max-width: 720px){
    font-size: 1.5rem;
  }
`;
export const P = styled.p`
  font-weight: normal;
  font-size: 1rem;
  color: #e0e0e0;
  font-family: Poppins;
`;