import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CreatedBy from "./CreatedBy";

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const OptionTitle = styled.div`
  margin-right: 1rem;
  font-weight: bold;
`;

const VoteContainer = styled.div`
  padding-right: 1rem;
`;

const StatisticsView = ({ question }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const answer = useSelector(
    (state) => state.users[currentUser.id].answers[question.id]
  );
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  return (
    <div>
      <CreatedBy questionId={question.id} />
      <Option
        option={question.optionOne}
        totalVotes={totalVotes}
        selectedByUser={answer === "optionOne"}
      />

      <Option
        option={question.optionTwo}
        totalVotes={totalVotes}
        selectedByUser={answer === "optionTwo"}
      />
    </div>
  );
};

const Option = ({ option, totalVotes, selectedByUser }) => {
  const singular = option.votes.length === 1;

  return (
    <OptionContainer>
      {selectedByUser && <Checkbox />}
      <OptionTitle>{option.text}</OptionTitle>
      <VoteContainer>
        {option.votes.length} {singular ? "vote" : "votes"}
      </VoteContainer>
      <div>{Math.round((option.votes.length / totalVotes) * 100)}%</div>
    </OptionContainer>
  );
};

const Tooltip = styled.div`
  cursor: pointer;
  padding-right: 0.5rem;
`;

const Checkbox = () => <Tooltip title="Selected by you">✅</Tooltip>;

export default StatisticsView;
