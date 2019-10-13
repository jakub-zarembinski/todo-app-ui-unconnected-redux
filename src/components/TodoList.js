import React, { Component } from 'react';
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodoMapByVisibilityFilter } from "../redux/selectors";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map(todo => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
          : "No todos, yay!"}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodoMapByVisibilityFilter(state, visibilityFilter);
  return { todos }
}

export default connect(mapStateToProps)(TodoList)
