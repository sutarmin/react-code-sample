import React from "react";

import { TitleWrapper, TitleContainer, WordsContainer } from "./styles";
import { Component } from "./types";

const GrammarMechanicTitle: Component = ({ title, taskText }) => {
  return (
    <TitleWrapper>
      <TitleContainer>{title}</TitleContainer>
      <WordsContainer>{taskText}</WordsContainer>
    </TitleWrapper>
  );
};

export default GrammarMechanicTitle;
