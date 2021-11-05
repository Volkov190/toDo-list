import React from "react";
import Counter from "../Counter/Counter.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import NewTask from "../NewTask/NewTask.jsx";

import styles from "./App.module.sass";

export class App extends React.Component {
  constructor(props) {
    super(props);

    let tasks = localStorage.getItem("tasks");
    
    if (!tasks || tasks === '') {
      tasks = [{ text: "Create to do list", isDone: false }];
    } else {
      tasks = JSON.parse(tasks);
    }
    console.log(tasks)
    const count = tasks.length;

    this.state = { count, tasks };

    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleTaskRemove = this.handleTaskRemove.bind(this);
  }

  handleNewTask(event) {
    event.preventDefault();
    // event.target.text.value = '';

    let tasks = this.state.tasks.slice();
    let count = this.state.count;
    const newTask = { text: event.target.text.value.trim(), isDone: false };
    event.target.text.value = "";

    if (newTask.text !== "") {
      let taskAdded = false;

      for (const task of tasks) {
        if (newTask.text === task.text) {
          task.isDone = false;
          taskAdded = true;
          break;
        }
      }

      if (!taskAdded) {
        tasks.push(newTask);
        ++count;
      }
    }

    this.setState({ count, tasks });

    tasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasks);
  }

  handleTaskChange(text) {
    let tasks = this.state.tasks.slice();

    for (const task of tasks) {
      if (task.text === text) {
        task.isDone = !task.isDone;
        break;
      }
    }

    this.setState({ tasks });

    tasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasks);
  }

  handleTaskRemove(text) {
    let tasks = this.state.tasks.slice();

    let removeTaskIndex;
    for (let i = 0; i < tasks.length; ++i) {
      if (tasks[i].text === text) {
        removeTaskIndex = i;

        break;
      }
    }

    tasks.splice(removeTaskIndex, 1);
    const count = this.state.count - 1;

    this.setState({ tasks, count });
    
    tasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasks);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.header}>To Do List</h1>
        <Counter count={this.state.count} className={styles.counter} />
        <NewTask onSubmit={this.handleNewTask} className={styles.newTask} />
        <TaskList
          tasks={this.state.tasks}
          onChange={(text) => this.handleTaskChange(text)}
          className={styles.taskList}
          onRemove={this.handleTaskRemove}
        />
      </div>
    );
  }
}

export { App as default };
