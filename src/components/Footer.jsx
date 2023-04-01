import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      created by <a href="https://github.com/Jeremy-Polanco">Jeremy-Polanco</a>-
      devChallenges.io
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: center;
  position: relative;
  bottom: -15em;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 17px;
  color: #f2f2f2;
  a {
    font-weight: 700;
    text-decoration: none;
    color: inherit;
  }
  @media (max-height: 600px) {
    bottom: -10em;
  }
`;

export default Footer;
