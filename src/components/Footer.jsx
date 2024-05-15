import styles from "./footer.module.css";
export default function Footer({ completed, notCompleted, total }) {
  return (
    <div className={styles.footer}>
      Completed: {completed} | Not Completed: {notCompleted} | Total: {total}
    </div>
  );
}
