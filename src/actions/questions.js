import { _getQuestions as getQuestions } from "../_DATA";

export const RECEIVE_QUESTION_DATA = "RECEIVE_QUESTION_DATA";

const receiveQuestionData = (questions) => ({
  type: RECEIVE_QUESTION_DATA,
  questions,
});

export const handleInitialQuestionData = () => (dispatch) => {
  getQuestions().then((questions) => dispatch(receiveQuestionData(questions)));
};
