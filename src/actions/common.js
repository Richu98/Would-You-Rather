import { _saveQuestionAnswer as saveQuestionAnswer } from "../_DATA";

export const VOTE = "VOTE";

const vote = (questionId, option, userId) => ({
  type: VOTE,
  id: questionId,
  option,
  userId,
});

export const handleVote = (questionId, option, user) => (dispatch) => {
  dispatch(vote(questionId, option, user.id));

  saveQuestionAnswer({
    authedUser: user.id,
    qid: questionId,
    answer: option,
  });
};
