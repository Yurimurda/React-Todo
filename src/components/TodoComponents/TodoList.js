// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {

  return (
    <div className="shopping-list">
      {props.list.map(item => (
        <Todo key={item.id} item={item} complete={props.complete} />
      ))}
      <button className="clear-btn" onClick={()=> props.clear()}>

        Clear
      </button>
    </div>
  );
};

export default TodoList;