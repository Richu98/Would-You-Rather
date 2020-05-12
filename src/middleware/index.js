import { applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reduxThunk from "redux-thunk";

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

export default applyMiddleware(...middlewares);
