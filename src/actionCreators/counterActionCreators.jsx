import { DECREMENT, INCREMENT } from "../actionTypes/counterActionTypes.jsx";

export const decrementActionCreator = () => {
  return {type: DECREMENT, amount: 1};
};

export const incrementActionCreator = () => {
  return {type: INCREMENT, amount: 1};
};