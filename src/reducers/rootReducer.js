import { combineReducers } from "redux-immutable";

import cityReducer from "reducers/cityReducer";
import weatherInfoReducer from "reducers/weatherInfoReducer";

export default combineReducers({
  cityReducer,
  weatherInfoReducer
});

// This is the structure of global state store
//
// {
//   cityReducer: {
//     selectedCity: "12345"
//   },
//   weatherInfoReducer: {
//     data: {}
//     isLoading: true,
//     ...
//   }
// }
