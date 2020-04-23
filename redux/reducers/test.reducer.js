import { TEST_ACTION } from "../actions/index.actions";

const test = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default test;
