import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleInitialQuestionData } from "../../actions/questions";
import QuestionList from "./QuestionList";

const Home = () => {
  const questionsLoading = useSelector((state) => state.questionsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (questionsLoading) {
      dispatch(handleInitialQuestionData());
    }
  }, [dispatch, questionsLoading]);

  return <>{questionsLoading ? <h2>Loading...</h2> : <QuestionList />}</>;
};

export default Home;
