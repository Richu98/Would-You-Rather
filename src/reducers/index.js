import { combineReducers } from "redux";
import users from "./users";
import currentUser from "./current_user";
import usersLoading from "./users_loading";
import questions from "./questions";
import questionsLoading from "./questions_loading";

export default combineReducers({
  users,
  usersLoading,
  currentUser,
  questions,
  questionsLoading,
});
