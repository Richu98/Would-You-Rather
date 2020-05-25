import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterItem = styled.a`
  &.active {
    color: red;
  }
`;

const QuestionList = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const questions = useSelector((state) => state.questions);
  const [questionFilter, setQuestionFilter] = useState("unanswered");

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
    <div>
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

      {displayableQuestions.map((question) => (
        <div key={question.id}>
          Would you rather ...{question.optionOne.text}...
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
