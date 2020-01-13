import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import "./components/TodoComponents/Todo.css";


const items = [
  {
    name: 'Do Dishes',
    id: 123,
    completed: true
  },
  {
    name: 'Feed Kitty Meow',
    id: 124,
    completed: false
  },
  {
    name: 'Read Books',
    id: 1235,
    completed: false
  },
  {
    name: 'Trim Palm Trees',
    id: 1246,
    completed: false
  },
  {
    name: ' Organize Garage',
    id: 1237,
    completed: false
  },
  {
    name: 'Grocery Shop',
    id: 1248,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    // initialize state
    super();
    this.state = {
      items: items,
      anotherOne: ''
    };
  }

      addItem = newItemText => {
        // add new item to the Todo list
        // need to follow immutability rules
        const newItem = {
          name: newItemText,
          id: Date.now(),
          completed: false
        };
        this.setState({
          items: [...this.state.items, newItem]
        });
      };

      filterCompleted = event => {
        event.preventDefault();
        this.setState(prevState => {
          return {
            items: prevState.items.filter(todo => {
              return !todo.completed;
            })
          }
        })
      };

      toggleCompleted = todoId => {
        const todos = this.state.items.map(item => {
          if (item.id === todoId) {
            item.completed = !item.completed;
          }
          return item
        })
        this.setState({ todos, item: ""});
      };

  render() {
    return (
      <div>
        <div className="header">
          <h2>Welcome to Lisa's Todo App!</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList items={this.state.items}
        toggleCompleted={this.toggleCompleted}
        filterCompleted={this.filterCompleted} />
      </div>
    );
  }
}

export default App;
