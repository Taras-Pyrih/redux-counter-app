import { INCREMENT, DECREMENT } from "../actionTypes/counterActionTypes.jsx";

const initialState = {
  value: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.amount
      };
    case DECREMENT:
      if (state.value > 0) {
        return {
          ...state,
          value: state.value - action.amount
        };
      }
      else {
        return state;  
      }
    default:
      return state;
  }
};