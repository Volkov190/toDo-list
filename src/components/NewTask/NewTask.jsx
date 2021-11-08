import styles from "./NewTask.module.sass";

export default function NewTask(props) {
  let nameOfClass = props.className;

  if (styles.wrapper) {
    nameOfClass += " " + styles.wrapper;
  }

  return (
    // <div className={nameOfClass}>
    <form onSubmit={props.onSubmit} className={nameOfClass}>
      <input
        name="text"
        type="text"
        placeholder="Task"
        className={styles.input}
      />
      <input type="submit" value="Add Task" className={styles.button} />
      <input
        type="submit"
        value="+"
        className={styles.button + " " + styles.button_small}
      />
    </form>
    // </div>
  );
}
