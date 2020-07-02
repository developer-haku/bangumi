import * as actionType from "../actions/ActionTypes";

const defaultState = {
  initialized: false
};

const initialization = (state, action) => {
  return {
    ...state,
    initialized: action.initialized
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.INITIALIZATION:
      return initialization(state, action);
    default:
      return state;
  }
};

export default reducer;
