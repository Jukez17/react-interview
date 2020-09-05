import React from "react";
import { TodosProvider } from "../../context/Context";
import Form from "./Form";
import TodoList from "./TodoList";

function Todo() {
  //const classes = useStyles();
  return (
    <TodosProvider>
      <Form />
      <TodoList />
    </TodosProvider>
  );
}

export default Todo;
