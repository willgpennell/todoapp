import { useState } from "react";
import TodoList from "./TodoList.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((todo) => todo.status).length;
  const notCompleted = todos.filter((todo) => !todo.status).length;
  const total = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completed={completed} notCompleted={notCompleted} total={total} />
    </div>
  );
}
