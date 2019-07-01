import React from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(require("./PageTemplate.sass"));

interface Props {}
const PageTemplate: React.SFC<Props> = ({ children }) => {
  return (
    <div className={cx("page-template")}>
      <h1>Todo List</h1>
      <div className={cx("content")}>{children}</div>
    </div>
  );
};

export default PageTemplate;
