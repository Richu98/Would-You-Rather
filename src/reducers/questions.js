import { RECEIVE_QUESTION_DATA, ADD_QUESTION } from "../actions/questions";
import { VOTE } from "../actions/common";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTION_DATA:
      return action.questions;
    case VOTE:
      return Object.fromEntries(
        Object.entries(state).map(([key, question]) =>
          question.id === action.id
            ? [
                key,
                {
                  ...question,
                  [action.option]: {
                    ...question[action.option],
                    votes: [
                      ...question[action.option]?.votes,
                      action.userId,
                    ],
                  },
                },
              ]
            : [key, question]
        )
      );
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question }
    default:
      return state;
  }
};

export default questions;
