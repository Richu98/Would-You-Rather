import { combineReducers } from "redux";
import users from "./users";
import currentUser from "./current_user";
import usersLoading from "./users_loading";

export default combineReducers({ users, usersLoading, currentUser });
