import { TEST_ACTION } from "../actions/index.actions";

const counter = (state = { counter: 100 }, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return state + 1;
    }
    default:
      return state;
  }
};

export default counter;
