import React from "react";
import styled from "styled-components";
import { Footer, Header, ResultsCard } from "../components";

const ResultsPage = () => {
  return (
    <Wrapper>
      <Header />
      <ResultsCard />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(90vh - 2rem);
  min-height: 515px;
`;

export default ResultsPage;
