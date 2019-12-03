import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
// imports

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      list: list,


    };
  }

  clearTask = () =>{
    const crossed = this.state.list.filter(value => !value.completed )
    this.setState ({
      list: crossed
    })
  }

  completeTask = (taskId) => {
    const tempArray = this.state.list
    const indexElement = this.state.list.findIndex(({id}) => {return id === taskId});
    console.log(indexElement)
    console.log(taskId)
    const updatedElement = {
      task: this.state.list[indexElement].task,
      id: taskId,
      completed: (this.state.list[indexElement].completed === true) ? false : true
    }
    
tempArray.splice(indexElement, 1, updatedElement);
this.setState({list:tempArray})
  }

    addItem = newItemText => {
      const newItem = {
        task: newItemText,
        id: Date.now(),
        completed: false
      };
      this.setState({
        list: [...this.state.list, newItem]
      });
    };
  
  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList list={this.state.list} complete={this.completeTask} clear={this.clearTask} updatedElement={this.updatedElement}/>
      </div>
      
    );
  }
}

export default App;
