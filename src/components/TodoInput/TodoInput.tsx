import React from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(require("./TodoInput.sass"));
interface Props {
  value: string;
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  onInsert(): void;
}

const TodoInput: React.SFC<Props> = ({ value, onChange, onInsert }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onInsert();
    }
  };
  return (
    <div className={cx("todo-input")}>
      <input
        type="text"
        onChange={onChange}
        onKeyPress={handleKeyPress}
        value={value}
      />
      <div className={cx("add-button")} onClick={onInsert}>
        ADD
      </div>
    </div>
  );
};

export default TodoInput;
