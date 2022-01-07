import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import Card from "./components/UI/Card";
import TodoFilter from "./components/Todo/TodoFilter";

const DUMB_EXPENSES = [
  {
    title: "Cycling Down the hill",
    id: "0@$",
    isCompleted: true,
  },
  {
    title: "Hitting the Gym",
    id: "0#$",
    isCompleted: false,
  },
  {
    title: "Taking a Shower",
    id: "0@1",
    isCompleted: false,
  },
];

const App = () => {
  const [todo, setTodo] = useState(DUMB_EXPENSES);
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todos"));
    if (todoData) setTodo(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const submittedTodoData = todoData => {
    setTodo(prevState => [todoData, ...prevState]);
  };

  const completedTodoItem = id => {
    setTodo(prevState => {
      const index = prevState.findIndex(t => t.id === id);
      prevState[index].isCompleted = true;
      return [...prevState];
    });
  };
  const deletedTodoItem = id => {
    setTodo(prevState => prevState.filter(todo => todo.id !== id));
  };

  const filterChangeHandler = type => {
    setFilterType(type);
  };

  const selectedFilteredTodo = () => {
    if (filterType === "All") {
      return [...todo];
    }
    if (filterType === "Completed") {
      const filtered = todo.filter(t => t.isCompleted === true);
      return filtered;
    }
    if (filterType === "Un-Completed") {
      const filtered = todo.filter(t => t.isCompleted !== true);
      return filtered;
    }
  };

  return (
    <Card className={styles.app}>
      <div className={styles.formfilter}>
        <TodoForm onSave={submittedTodoData} />
        <TodoFilter onSelect={filterType} onFilter={filterChangeHandler} />
      </div>
      <TodoList
        items={selectedFilteredTodo}
        onComplete={completedTodoItem}
        onDelete={deletedTodoItem}
      />
    </Card>
  );
};

export default App;
