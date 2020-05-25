import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import QuestionBox from "./QuestionBox";
import { SuccessNotice, ErrorNotice } from "../common";

const Container = styled.div`
  text-align: center;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterItem = styled.a`
  padding: 0.5rem;

  &.active {
    color: red;
  }
`;

const ListContainer = styled.div`
  display: inline-block;
`;

const QuestionList = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const questions = useSelector((state) => state.questions);
  const [questionFilter, setQuestionFilter] = useState("unanswered");

  const location = useLocation();

  const successNotice = location.state?.successNotice;
  const errorNotice = location.state?.errorNotice;

  const votedByUser = useCallback(
    (question) =>
      question.optionOne.votes.includes(currentUser.id) ||
      question.optionTwo.votes.includes(currentUser.id),
    [currentUser]
  );

  const fetchAnsweredQuestions = useCallback(
    () => Object.values(questions).filter((q) => votedByUser(q)),
    [questions, votedByUser]
  );

  const fetchUnansweredQuestions = useCallback(
    () => Object.values(questions).filter((q) => !votedByUser(q)),
    [questions, votedByUser]
  );

  const displayableQuestions =
    questionFilter === "unanswered"
      ? fetchUnansweredQuestions()
      : fetchAnsweredQuestions();

  return (
    <Container>
      {successNotice && <SuccessNotice>{successNotice}</SuccessNotice>}
      {errorNotice && <ErrorNotice>{errorNotice}</ErrorNotice>}
      <FilterContainer>
        <FilterItem
          href="#"
          className={questionFilter === "unanswered" ? "active" : ""}
          onClick={() => setQuestionFilter("unanswered")}
        >
          Unanswered
        </FilterItem>
        <FilterItem
          href="#"
          className={questionFilter === "answered" ? "active" : ""}
          onClick={() => setQuestionFilter("answered")}
        >
          Answered
        </FilterItem>
      </FilterContainer>

      <ListContainer>
        {displayableQuestions.map((question) => (
          <QuestionBox key={question.id} question={question} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default QuestionList;
