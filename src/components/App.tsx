import React, { Component } from "react";
import PageTemplate from "./PageTemplate/PageTemplate";
import TodoInput from "./TodoInput/TodoInput";
import TodoList, { Todo } from "./TodoList/TodoList";
interface Props {}

interface State {
  input: string;
  todos: Todo[] | undefined;
}
export default class App extends Component<Props, State> {
  state = {
    input: "",
    todos: [{ id: 0, text: "Study React", done: false }]
  };
  id = 1;
  getId = (): number => {
    return ++this.id;
  };
  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    this.setState({
      input: value
    });
  };
  handleInsert = (): void => {
    const { todos, input } = this.state;

    const newTodo: Todo = {
      text: input,
      done: false,
      id: this.getId()
    };
    this.setState({
      todos: [...todos, newTodo],
      input: ""
    });
  };
  handleToggle = (id: number): void => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  };
  handleRemove = (id: number): void => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    });
  };
  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    return (
      <div>
        <PageTemplate>
          <TodoInput
            value={input}
            onChange={handleChange}
            onInsert={handleInsert}
          />
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        </PageTemplate>
      </div>
    );
  }
}
