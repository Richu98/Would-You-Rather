import {
  _getQuestions as getQuestions,
  _saveQuestion as saveQuestion,
} from "../_DATA";

export const RECEIVE_QUESTION_DATA = "RECEIVE_QUESTION_DATA";
export const ADD_QUESTION = "ADD_QUESTION";

const receiveQuestionData = (questions) => ({
  type: RECEIVE_QUESTION_DATA,
  questions,
});

export const handleInitialQuestionData = () => (dispatch) => {
  getQuestions().then((questions) => dispatch(receiveQuestionData(questions)));
};

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const handleAddQuestion = (optionOneText, optionTwoText, author) => (
  dispatch
) => {
  saveQuestion({ optionOneText, optionTwoText, author }).then((question) =>
    dispatch(addQuestion(question))
  );
};
