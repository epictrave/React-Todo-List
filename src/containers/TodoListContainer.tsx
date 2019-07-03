import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { List } from "immutable";
import { actionCreators as todosActions, TodoItemData } from "modules/todos";
import { connect } from "react-redux";
import TodoList from "components/TodoList/TodoList";

interface Props {
  todos: List<TodoItemData>;
  TodosActions: typeof todosActions;
}
class TodoListContainer extends Component<Props> {
  handleToggle = (id: number) => {
    const { TodosActions } = this.props;
    TodosActions.toggle({ id });
  };
  hanldeRemove = (id: number) => {
    const { TodosActions } = this.props;
    TodosActions.remove({ id });
  };

  render() {
    const { todos } = this.props;
    const { handleToggle, hanldeRemove } = this;
    return (
      <TodoList todos={todos} onToggle={handleToggle} onRemove={hanldeRemove} />
    );
  }
}
export default connect(
  (state: any) => ({
    todos: state.todos.todoItems
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoListContainer);
