import React, { Component } from "react";

class TodoList extends Component {
  render() {
    var { allTasks, deleteTask } = this.props;
    return (
      <div>
        <div className="todo-list-parent">
          <ul className="todo-list list-unstyled">
            {allTasks.map((task, index) => (
              <li className="list-item" key={index}>
                {task}
                <a className="delete-task" onClick={()=>deleteTask(index)}>
                  <i className="fas fa-trash-alt"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
