import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import { handleAddQuestion } from "../../actions/questions";

const QUESTION_CREATED_NOTICE = "Question successfully created";

const NewQuestion = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const location = useLocation();
  const history = useHistory();

  const onChange = (e) => {
    if (e.target.id === "optionOne") {
      setOptionOne(e.target.value);
    } else {
      setOptionTwo(e.target.value);
    }
  };

  const onSubmit = () => {
    dispatch(handleAddQuestion(optionOne, optionTwo, currentUser.id));
    history.push({
      pathname: "/",
      state: { successNotice: QUESTION_CREATED_NOTICE },
    });
  };

  return (
    <>
      <h2>New question</h2>

      <div>
        <label htmlFor="optionOne">First option</label>
        <input
          type="text"
          id="optionOne"
          value={optionOne}
          onChange={onChange}
        />
      </div>

      <br />

      <div>
        <label htmlFor="optionTwo">Second option</label>
        <input
          type="text"
          id="optionTwo"
          value={optionTwo}
          onChange={onChange}
        />
      </div>

      <br />

      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default NewQuestion;
