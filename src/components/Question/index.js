import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

const Question = () => {
  const { id } = useParams();

  const question = useSelector((state) => state.questions[id]);

  if (typeof question === "undefined") {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <>
      <div>Question with id of {id}</div>
    </>
  );
};

export default Question;
