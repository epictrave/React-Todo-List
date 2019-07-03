import React, { Component } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(require("./TodoItem.sass"));
interface Props {
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}
interface State {}
class TodoItem extends Component<Props, State> {
  render() {
    const { done, children, onToggle, onRemove } = this.props;
    return (
      <div className={cx("todo-item")} onClick={onToggle}>
        <input className={cx("tick")} type="checkbox" checked={done} readOnly />
        <div className={cx("text", { done })}>{children}</div>
        <div
          className={cx("delete")}
          onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
            onRemove();
            e.stopPropagation();
          }}
        >
          [REMOVE]
        </div>
      </div>
    );
  }
}

export default TodoItem;
