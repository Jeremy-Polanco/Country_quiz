import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1
        className="title
       underline "
      >
        404 Error page not found...
      </h1>
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
  color: #f2f2f2;
`;

export default ErrorPage;
