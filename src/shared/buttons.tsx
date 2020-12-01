import React from "react";
import styled from "styled-components";

type ButtonProp = {
  text: string;
};

const ButtonStyles = styled.div`
  background: var(--text);
  color: var(--dark);

  padding: 10px 15px;
  display: inline;
  border: 1px solid var(--text);
  border-radius: 20px;

  transition: 0.5s ease-in all;

  &:hover {
    background: var(--dark);
    color: var(--text);
  }

  &:focus {
    background: var(--text);
    color: var(--dark);
    opacity: 0.75;
  }
`;

const GradientButtonStyles = styled(ButtonStyles)``;

export const Button = ({ text }: ButtonProp) => {
  return <ButtonStyles> {text} </ButtonStyles>;
};

export const GradientButton = ({ text }: ButtonProp) => {
  return <GradientButtonStyles>{text}</GradientButtonStyles>;
};
