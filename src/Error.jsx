import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;
const Error = () => {
  return (
    <Wrapper>
      <h1>Oops!!!</h1>
      <h3>404 - The page you are looking for might have been remove</h3>
      <h3>or had its name changed or is temporarily unavailable</h3>

      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

export default Error;
