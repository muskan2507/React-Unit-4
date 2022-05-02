import { INCREMENT, DECREMENT } from "./action";

const initState = { count: 0 };

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        count: state.count + payload
      };
    case DECREMENT:
      return {
        count: state.count - payload
      };
    default:
      return state;
  }
};