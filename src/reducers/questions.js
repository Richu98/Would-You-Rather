import { RECEIVE_QUESTION_DATA } from "../actions/questions";

const questions = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_QUESTION_DATA:
      return action.questions;
    default:
      return state;
  }
};

export default questions;
