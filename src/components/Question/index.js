import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import StatisticsView from "./StatisticsView";
import VoteView from "./VoteView";

const QUESTION_NOT_FOUND_NOTICE =
  "Unable to find the question you were searching for. Sorry about that!";

const Heading = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const Question = () => {
  const { id } = useParams();

  const question = useSelector((state) => state.questions[id]);
  const currentUser = useSelector((state) => state.currentUser);

  if (typeof question === "undefined") {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { errorNotice: QUESTION_NOT_FOUND_NOTICE },
        }}
      />
    );
  }

  const completedByUser =
    question.optionOne.votes.includes(currentUser.id) ||
    question.optionTwo.votes.includes(currentUser.id);

  return (
    <>
      <Heading>Would you rather</Heading>
      {completedByUser ? (
        <StatisticsView question={question} currentUser={currentUser} />
      ) : (
        <VoteView question={question} currentUser={currentUser} />
      )}
    </>
  );
};

export default Question;
