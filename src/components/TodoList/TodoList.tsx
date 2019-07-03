import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoItemData } from "modules/todos";
import { List } from "immutable";
interface Props {
  todos: List<TodoItemData>;
  onToggle(id: number): void;
  onRemove(id: number): void;
}
interface State {}
class TodoList extends Component<Props> {
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map((todo, index) => (
      <TodoItem
        key={todo.get("id")}
        done={todo.get("done")}
        onRemove={() => onRemove(index)}
        onToggle={() => onToggle(index)}
      >
        {todo.text}
      </TodoItem>
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoList;
