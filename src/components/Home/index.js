import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { handleInitialQuestionData } from "../../actions/questions";
import QuestionList from "./QuestionList"

const Container = styled.div`
  text-align: center;
`

const Home = () => {
  // const currentUser = useSelector((state) => state.currentUser);
  const questionsLoading = useSelector((state) => state.questionsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialQuestionData());
  }, [dispatch]);

  return (
    <Container>
      {questionsLoading ? <h2>Loading...</h2> : <QuestionList />}
    </Container>
  );
};

export default Home;
