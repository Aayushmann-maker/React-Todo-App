import React from "react";
import styles from "./TodoFilter.module.css";

const TodoFilter = props => {
  const optionChangeHandler = event => {
    props.onFilter(event.target.value);
  };
  return (
    <select
      className={styles["action-filter"]}
      value={props.onSelect}
      onChange={optionChangeHandler}
    >
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Un-Completed">Un-Completed</option>
    </select>
  );
};

export default TodoFilter;
