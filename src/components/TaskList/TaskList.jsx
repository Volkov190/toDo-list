import Task from "../../components/Task/Task.jsx";
import styles from "./TaskList.module.sass";

const crypto = require("crypto");

export default function TaskList(props) {
  let nameOfClass = props.className;
  if (styles.wrapper) {
    nameOfClass += " " + styles.wrapper;
  }

  let tasks = props.tasks;
  let taskList = tasks.map((task) => {
    return (
      <Task
        text={task.text}
        isDone={task.isDone}
        onChange={(event) => props.onChange(task.text)}
        key={crypto.createHash("md5").update(task.text).digest("hex")}
        className={styles.task}
        onRemove={() => props.onRemove(task.text)}
      />
    );
  });

  return <div className={nameOfClass}>{taskList}</div>;
}
