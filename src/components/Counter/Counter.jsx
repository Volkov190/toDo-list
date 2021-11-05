import styles from "./Counter.module.sass";

export default function Counter(props) {
  let nameOfClass = props.className;

  if (styles.wrapper) {
    nameOfClass += " " + styles.wrapper;
  }

  return <h3 className={nameOfClass}>{props.count} tasks</h3>;
}
