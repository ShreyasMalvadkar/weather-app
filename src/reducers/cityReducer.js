import { cityActions } from "actions/cityActions";
import { fromJS } from "immutable";

const initialState = fromJS({
  selectedCity: ""
});

const cityReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case cityActions.change:
      return state.set("selectedCity", payload);

    default:
      return state;
  }
};

export default cityReducer;
