import React from "react";
import styled from "styled-components";
import resultsLogo from "../images/undraw_winners_ao2o 2.svg";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion, tryAgain } from "../features/questionSlice";
import { Link } from "react-router-dom";
import { getCountriesProperties } from "../utils/helpers";

const ResultsCard = () => {
  const dispatch = useDispatch();
  const { countriesAndCapitals, correctAnswers } = useSelector(
    (store) => store.questions
  );

  const capitals = getCountriesProperties(countriesAndCapitals, "capital");
  const flags = getCountriesProperties(countriesAndCapitals, "flags");
  const countries = getCountriesProperties(countriesAndCapitals, "name");

  return (
    <Wrapper>
      <img src={resultsLogo} alt="quiz results" className="img" />
      <h1 className="title">Results</h1>
      <p className="results">
        You got <span className="correct-amount">{correctAnswers}</span> correct
        answers
      </p>
      <Link to="/" className="position-center">
        <div className="btn-container">
          <button
            className="try-btn"
            onClick={() => {
              dispatch(getQuestion([capitals, flags, countries]));
              dispatch(tryAgain());
            }}
          >
            Try again
          </button>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  justify-content: center;
  position: relative;
  width: 80vw;
  max-width: 500px;
  min-width: 290px;
  height: 515px;
  border-radius: 1.5em;
  background: #ffffff;
  .position-center {
    display: flex;
    margin: 2rem 0;
  }
  .btn-container {
    margin: 0 auto;
    .try-btn {
      width: 209px;
      height: 62px;
      border: 2px solid #1d355d;
      border-radius: 12px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #1d355d;
      background: #ffffff;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .results {
    text-align: center;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 27px;
    color: #1d355d;
    .correct-amount {
      font-weight: 700;
      font-size: 2rem;
      color: #60bf88;
    }
  }
  .img {
    margin-top: 49px;
  }
`;

export default ResultsCard;
