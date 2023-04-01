import React from "react";
import styled from "styled-components";
import { Footer, Header, QuestionCard } from "../components";
import { useSelector } from "react-redux";

const QuizPage = () => {
  const { isLoading } = useSelector((store) => store.questions);

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading"></div>
      </Wrapper>
    );
  } else
    return (
      <Wrapper>
        <Header />
        <QuestionCard />
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

export default QuizPage;
