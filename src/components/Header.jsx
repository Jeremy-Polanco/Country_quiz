import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1 className="title">country quiz</h1>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-top: 10rem;
  width: 80vw;
  max-width: 500px;
  .title {
    text-transform: uppercase !important;
    text-align: left;
    font-family: "Poppins";
  }
  color: #f2f2f2;
  font-weight: 700;
  font-size: 36px;
  @media (min-width: 800px) {
    .title {
      font-size: 2.5rem;
    }
  }
`;

export default Header;
