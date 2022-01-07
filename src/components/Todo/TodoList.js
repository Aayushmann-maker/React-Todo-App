import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = props => {
  return (
    <ul className={props.items().length > 0 ? styles["todo-list"] : ""}>
      {props.items().map(item => (
        <TodoItem
          title={item.title}
          key={item.id}
          id={item.id}
          completed={item.isCompleted}
          onComplete={props.onComplete}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
