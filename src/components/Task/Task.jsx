import styles from "./Task.module.sass";
// import trash from '../../icons/trash.svg';

export default function Task(props) {
  let nameOfClass = props.className;
  if (styles.wrapper) {
    nameOfClass += " " + styles.wrapper;
  }

  return (
    <div className={nameOfClass}>
      <input
        type="checkbox"
        checked={props.isDone}
        onChange={props.onChange}
        className={styles.checkbox}
      />
      <p
        className={
          props.isDone ? styles.text + " " + styles.text_done : styles.text
        }
      >
        {props.text}
      </p>
        <div className={styles.removeBtn} onClick={props.onRemove}></div>
    </div>
  );
}
