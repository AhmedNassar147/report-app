import { combineReducers } from "redux-immutablejs";
import { reducer as form } from "redux-form/immutable";

const rootReducer = combineReducers({
  form
});

export default rootReducer;