import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://restcountries.com/v3.1";

const initialState = {
  countriesAndCapitals: [],
  country: "",
  capital: "",
  flags: [],
  flag: "",
  questions: ["is the capital of", "which country this flag belong to"],
  currentQuestion: "",
  correctAnswers: 0,
  answers: [],
  selectedAnswer: "",
  isLoading: true,
  waiting: false,
};

export const getAllCountries = createAsyncThunk("getAllCountries", async () => {
  try {
    const { data } = await axios(`${url}/all`);
    return data;
  } catch (error) {
    console.log(error.response);
    return "something went wrong";
  }
});

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestion: (state, action) => {
      const randomQuestionIndex = Math.round(Math.random());
      state.currentQuestion = current(state).questions[randomQuestionIndex];
      const randomCountryAndCapitalIndex = Math.round(
        Math.random() * action.payload[randomQuestionIndex].length
      );

      const newIncorrectAnswers = [
        action.payload[2][
          Math.round(Math.random() * action.payload[randomQuestionIndex].length)
        ],
        action.payload[2][
          Math.round(Math.random() * action.payload[randomQuestionIndex].length)
        ],
        action.payload[2][
          Math.round(Math.random() * action.payload[randomQuestionIndex].length)
        ],
      ];

      if (randomQuestionIndex === 0) {
        state.capital =
          action.payload[randomQuestionIndex][randomCountryAndCapitalIndex];
        state.country = action.payload[2][randomCountryAndCapitalIndex];
        state.flag = "";
      }
      if (randomQuestionIndex === 1) {
        state.flag =
          action.payload[randomQuestionIndex][randomCountryAndCapitalIndex];
        state.country = action.payload[2][randomCountryAndCapitalIndex];
        state.capital = "";
      }
      let answers = [...newIncorrectAnswers];
      const tempIndex = Math.floor(Math.random() * 4);
      if (tempIndex === 3) {
        answers.push(current(state).country);
      } else {
        answers.push(answers[tempIndex]);
        answers[tempIndex] = current(state).country;
      }
      state.answers = [...answers];
      state.waiting = false;
    },
    checkAnswer: (state, action) => {
      state.waiting = true;
      state.selectedAnswer = action.payload;
      if (current(state).country === action.payload) {
        state.correctAnswers = state.correctAnswers + 1;
      }
    },
    tryAgain: (state) => {
      state.correctAnswers = 0;
    },
  },
  extraReducers: {
    [getAllCountries.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCountries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countriesAndCapitals = action.payload;
    },
    [getAllCountries.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export const { getQuestion, checkAnswer, tryAgain } = questionSlice.actions;

export default questionSlice.reducer;
