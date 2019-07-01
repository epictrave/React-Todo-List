import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
interface Props {
  todos: Todo[];
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
    const todoList = todos.map(todo => (
      <TodoItem
        key={todo.id}
        done={todo.done}
        onRemove={() => onRemove(todo.id)}
        onToggle={() => onToggle(todo.id)}
      >
        {todo.text}
      </TodoItem>
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoList;
