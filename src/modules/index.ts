import input from "./input";
import todos from "./todos";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  input,
  todos
});
export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
