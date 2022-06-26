import { combineReducers } from "redux";
import reducer from "./MenuReducers";
const reducers = combineReducers({
  allData: reducer,
});

export default reducers;
