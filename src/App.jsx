import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizPage, ResultsPage, ErrorPage } from "./pages";
import { useDispatch } from "react-redux";
import { getAllCountries } from "./features/questionSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
