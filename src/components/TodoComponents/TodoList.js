// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = props => {

  return (
    <div className="todo-list">
      {props.items.map(item => (
        <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted}/>
      ))}
      <button className="clear-btn" type="button" class="btn btn-outline-info" onClick={props.filterCompleted} >
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoList;