import { RECEIVE_QUESTION_DATA } from "../actions/questions";

const questionsLoading = (state = true, action) => {
  switch (action.type) {
    case RECEIVE_QUESTION_DATA:
      return false;
    default:
      return state;
  }
};

export default questionsLoading;
