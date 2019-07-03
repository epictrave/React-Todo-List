import React, { Component } from "react";
import PageTemplate from "./PageTemplate/PageTemplate";
import TodoInputContainer from "containers/TodoInputContainer";
import TodoListContainer from "containers/TodoListContainer";
interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInputContainer />
          <TodoListContainer />
        </PageTemplate>
      </div>
    );
  }
}
