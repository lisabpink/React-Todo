import React from 'react';
import "./components/TodoComponents/Todo.css";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
        super();
        this.state = {
            name:"Lisa"
                };
      }
  render() {
    return (
      <div>
    <h1>Hello! Welcome to  {this.state.name}'s To Do App!!!</h1>
      </div>
    );
  }
}

export default App;
