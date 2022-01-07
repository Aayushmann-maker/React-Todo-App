import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";

const TodoForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const inputChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    const todoData = {
      title: enteredTitle,
      isCompleted: false,
      id: Date.now().toString(),
    };

    if (enteredTitle.trim().length === 0) {
      return alert("Please fill up the form");
    }

    props.onSave(todoData);

    setEnteredTitle("");
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <input
        type="text"
        value={enteredTitle}
        onChange={inputChangeHandler}
        placeholder="Enter a Todo"
      />
      <Button className={styles.addbtn} type="submit">
        <i className="fa fa-plus" aria-hidden="true"></i>
      </Button>
    </form>
  );
};

export default TodoForm;
