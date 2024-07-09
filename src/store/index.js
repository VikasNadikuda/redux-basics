import { legacy_createStore as createStore } from "redux";
const counterReducer = (state = { counter: 0, showToggle: true }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showToggle: state.showToggle,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showToggle: state.showToggle,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload.value,
      showToggle: state.showToggle,
    };
  }
  if (action.type === "toggleCounter") {
    return {
      showToggle: !state.showToggle,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
