const defaultState = {
  inputValue: "123",
  list: ["frod", "Andy"],
};
//reducer 可以接受state, 但是绝不定修改state
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state;
};
