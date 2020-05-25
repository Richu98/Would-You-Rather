import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { handleVote } from "../../actions/common";
import CreatedBy from './CreatedBy'

export const ChoicesContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const ChoicesDivideContainer = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin: 0 2rem;
`;

export const ChoicesDivider = () => (
  <ChoicesDivideContainer>OR</ChoicesDivideContainer>
);

const VoteView = ({ question, currentUser }) => {
  const dispatch = useDispatch();
  const [option, setOption] = useState("optionOne");

  const changeChosenOption = (e) => setOption(e.target.value);

  const submitAnswer = () => {
    dispatch(handleVote(question.id, option, currentUser));
  };

  return (
    <>
      <CreatedBy questionId={question.id} />
      <ChoicesContainer>
        <label htmlFor="optionOne">{question.optionOne.text}</label>
        <input
          type="radio"
          id="optionOne"
          name="would-you-rather"
          value="optionOne"
          checked={option === "optionOne"}
          onChange={changeChosenOption}
        />

        <ChoicesDivider />

        <label htmlFor="optionTwo">{question.optionTwo.text}</label>
        <input
          type="radio"
          id="optionTwo"
          name="would-you-rather"
          value="optionTwo"
          checked={option === "optionTwo"}
          onChange={changeChosenOption}
        />
      </ChoicesContainer>

      <button onClick={submitAnswer}>Submit</button>
    </>
  );
};

export default VoteView;
