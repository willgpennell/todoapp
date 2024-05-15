import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const todosCompleted = todos.filter((todo) => todo.status);
  const todosNotCompleted = todos.filter((todo) => !todo.status);

  return (
    <div className={styles.list}>
      {todosNotCompleted.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      {todosCompleted.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
