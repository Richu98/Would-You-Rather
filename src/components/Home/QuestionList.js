import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const QuestionList = () => {
  const questions = useSelector((state) => state.questions);

  return <div>
    {Object.keys(questions).map((question) => (
    <div key={question}>
      Would you rather ...{questions[question].optionOne.text}...
    </div>
    ))}
  </div>;
};

export default QuestionList;
