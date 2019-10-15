import React from 'react';
import cx from "classnames";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo1 = ({ todo, toggleTodo }) => {
  return (
    <li
      className="todo-item"
      onClick={() => {toggleTodo(todo.id)}}
    >
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
}

export default connect(null, { toggleTodo })(Todo1);
