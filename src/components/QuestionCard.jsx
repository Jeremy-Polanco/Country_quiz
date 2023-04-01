import React, { useEffect } from "react";
import styled from "styled-components";
import { getQuestion } from "../features/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { getCountriesProperties } from "../utils/helpers";
import quizLogo from "../images/undraw_adventure_4hum 1.svg";
import { Answers } from "./index";
import { Link } from "react-router-dom";

const QuestionCard = () => {
  const dispatch = useDispatch();
  const {
    currentQuestion,
    countriesAndCapitals,
    flag,
    capital,
    country,
    waiting,
    selectedAnswer,
  } = useSelector((store) => store.questions);

  useEffect(() => {
    dispatch(getQuestion([capitals, flags, countries]));
  }, []);

  const flags = getCountriesProperties(countriesAndCapitals, "flags");
  const capitals = getCountriesProperties(countriesAndCapitals, "capital");
  const countries = getCountriesProperties(countriesAndCapitals, "name");

  return (
    <Wrapper>
      <img src={quizLogo} alt="quiz draw" className="img" />
      <section className="section">
        {capital ? (
          <h3 className="question">{`${capital} ${currentQuestion}`}</h3>
        ) : (
          <>
            <img src={flag} alt="country flag" className="flag" />
            <h3 className="question">{currentQuestion}</h3>
          </>
        )}
        <Answers />
        {waiting && (
          <div className="btn-right">
            {selectedAnswer !== country ? (
              <Link to="/results" className="btn">
                next
              </Link>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  dispatch(getQuestion([capitals, flags, countries]));
                }}
              >
                next
              </button>
            )}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  width: 80vw;
  max-width: 500px;
  min-width: 290px;
  border-radius: 1.5em;
  background: #ffffff;
  .flag {
    width: 84px;
    border: 1px solid black;
    margin-left: 3.5em;
    margin-bottom: 1em;
  }
  .img {
    position: absolute;
    right: 0;
    top: -75px;
  }
  @media (max-width: 600px) {
    .img {
      display: none;
    }
    .question {
      margin: 0 !important;
      text-align: center;
    }
  }
  .question {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 36px;
    color: #2f527b;
    margin-left: 2em;
    max-width: 400px;
  }
  .btn {
    font-family: "Poppins";
    text-transform: capitalize;
    font-size: 1.2rem;
  }
  .btn-right {
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 430px) {
      margin-top: 4px;
    }
  }
`;

export default QuestionCard;
