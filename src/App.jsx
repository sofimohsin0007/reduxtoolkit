import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [todoToEdit, setTodoToEdit] = useState(null);

  const editTodoHandler = (todo) => {
    setTodoToEdit(todo);
  };

  const clearEdit = () => {
    setTodoToEdit(null);
  };

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo todoToEdit={todoToEdit} clearEdit={clearEdit} />
      <Todos editTodoHandler={editTodoHandler} />
    </>
  );
}

export default App;
