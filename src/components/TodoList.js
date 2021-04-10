import React, { Component } from "react";
import { motion } from "framer-motion";

class TodoList extends Component {
  render() {
    var { allTasks, deleteTask, editTask } = this.props;
    return (
      <div>
        <div className="todo-list-parent">
          <ul className="todo-list list-unstyled">
            {allTasks.map((task, index) => (
              <motion.div
                animate={{ scale: 1.01, opacity: .9}}
                transition={{ duration: .5 }}
                whileHover={{ scale: 1.1 } ,{ opacity: 1 }}
                whileTap={{ scale: 0.9 }} 
                key={index}
              >
                <li className="list-item">
                  {task.title}
                  <a className="delete-task" onClick={() => deleteTask(index)}>
                    <i className="fas fa-trash-alt"></i>
                  </a>
                  <a className="edit-task" onClick={() => editTask(index)}>
                    <i className="fas fa-edit"></i>
                  </a>
                </li>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
