import React, { useEffect } from "react";
import styled from "styled-components";
import { getQuestion, checkAnswer } from "../features/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const Answers = () => {
  const dispatch = useDispatch();
  const { country, waiting, answers, selectedAnswer } = useSelector(
    (store) => store.questions
  );

  return (
    <>
      {waiting ? (
        <Wrapper className="answers-container">
          {answers.map((answer, index) => {
            if (answer === country) {
              return (
                <div className="answer correct" key={index}>
                  <span className="answer-letter">
                    {(index === 0 && "A") ||
                      (index === 1 && "B") ||
                      (index === 2 && "C") ||
                      (index === 3 && "D")}
                  </span>
                  {answer}
                  <span className="correct-icon">
                    <FaRegCheckCircle className="icon" />
                  </span>
                </div>
              );
            }
            if (answer === selectedAnswer) {
              return (
                <div className="answer incorrect" key={index}>
                  <span className="answer-letter">
                    {(index === 0 && "A") ||
                      (index === 1 && "B") ||
                      (index === 2 && "C") ||
                      (index === 3 && "D")}
                  </span>
                  {answer}
                  <span className="incorrect-icon">
                    <FaRegTimesCircle className="icon" />
                  </span>
                </div>
              );
            }

            if (answer !== country) {
              return (
                <div className="answer" key={index}>
                  <span className="answer-letter">
                    {(index === 0 && "A") ||
                      (index === 1 && "B") ||
                      (index === 2 && "C") ||
                      (index === 3 && "D")}
                  </span>
                  {answer}
                </div>
              );
            }
          })}
        </Wrapper>
      ) : (
        <Wrapper className="answers-container">
          {answers.map((answer, index) => {
            return (
              <div
                className="answer answer-on-hover"
                key={index}
                onClick={() => dispatch(checkAnswer(answer))}
              >
                <span className="answer-letter">
                  {(index === 0 && "A") ||
                    (index === 1 && "B") ||
                    (index === 2 && "C") ||
                    (index === 3 && "D")}
                </span>
                {answer}
              </div>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 21px;
  .answer-on-hover {
    &:hover {
      background: #f9a826;
      color: #ffffff;
      transition: ease-in-out 0.5s;
      border: none;
    }
  }
  .answer {
    text-transform: capitalize;
    border-radius: 12px;
    height: 2.9em;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    background: #ffffff;
    border: 2px solid rgba(96, 102, 208, 0.7);
    color: rgba(96, 102, 208, 0.8);
    font-size: 1.2rem;
    border-radius: 12px;
    display: flex;
    gap: 82px;
    align-items: center;
    cursor: pointer;
    .answer-letter {
      position: relative;
      font-size: 1.5rem;
      right: -19px;
    }
    @media (max-width: 450px) {
      gap: 42px;
    }
  }
  .icon {
    vertical-align: middle;
  }
  .correct-icon,
  .incorrect-icon {
    margin-left: auto;
    margin-right: 1em;
  }
  .incorrect {
    border: none;
    color: #ffffff;
    background: #ea8282;
    &:hover {
      border: 1px solid black;
    }
  }
  .correct {
    border: none;
    color: #ffffff;
    background: #60bf88;
    &:hover {
      border: 1px solid black;
    }
  }
`;

export default Answers;
