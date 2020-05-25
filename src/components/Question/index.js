import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

const QUESTION_NOT_FOUND_NOTICE =
  "Unable to find the question you were searching for. Sorry about that!";

const Question = () => {
  const { id } = useParams();

  const question = useSelector((state) => state.questions[id]);

  if (typeof question === "undefined") {
    return (
      <Redirect
        to={{ pathname: "/", state: { errorNotice: QUESTION_NOT_FOUND_NOTICE } }}
      />
    );
  }

  return (
    <>
      <div>{question.optionOne.text}</div>
    </>
  );
};

export default Question;
