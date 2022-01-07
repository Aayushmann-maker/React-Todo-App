import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./TodoItem.module.css";

const TodoItem = props => {
  return (
    <Card className={styles["todo-item"]}>
      <h1 className={props.completed ? styles.completed : ""}>{props.title}</h1>
      <Button
        className={styles.completebtn}
        onClick={() => props.onComplete(props.id)}
      >
        <i className="fa fa-check" aria-hidden="true"></i>
      </Button>
      <Button
        className={styles.deletebtn}
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <i className="fa fa-trash" aria-hidden="true"></i>
      </Button>
    </Card>
  );
};

export default TodoItem;
