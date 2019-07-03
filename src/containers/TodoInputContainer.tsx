import React, { Component } from "react";
import TodoInput from "../components/TodoInput/TodoInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators as inputActions } from "modules/input";
import { actionCreators as todosActions } from "modules/todos";
interface Props {
  value: string;
  TodosActions: typeof todosActions;
  InputActions: typeof inputActions;
}
class TodoInputContainer extends Component<Props> {
  id = 1;
  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  };
  hanldeInsert = (): void => {
    const { InputActions, TodosActions, value } = this.props;
    TodosActions.insert(value);
    InputActions.setInput("");
  };
  render() {
    const { value } = this.props;
    const { handleChange, hanldeInsert } = this;
    return (
      <div>
        <TodoInput
          onChange={handleChange}
          onInsert={hanldeInsert}
          value={value}
        />
      </div>
    );
  }
}
export default connect(
  (state: any) => ({
    value: state.input.get("value")
  }),
  dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoInputContainer);
