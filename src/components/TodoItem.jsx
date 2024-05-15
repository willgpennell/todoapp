import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item);
    // keeps everything where todo != item
    // todos will be everything w/o item that was selected for deletion
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleComplete(name) {
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, status: !todo.status } : todo
    );
    console.log(newTodos);
    setTodos(newTodos);
  }
  const className = item.status ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleComplete(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.delButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
