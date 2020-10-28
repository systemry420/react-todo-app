import React from 'react'
import './App.css';
import Todo from './Todo'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        { name: "aaa", completed: false },
        { name: "bbb", completed: true },
        { name: "ccc", completed: false },
      ]
    }
  }

  addTodo(e) {
    alert(e)
  }

  render() {
    return (
      <div className="App">
        <h1>TODOS</h1>
        <div className="input">
          <form onSubmit={()=> this.addTodo}>
            <input type="text" placeholder="Enter todo item" />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="todos">
          {this.state.data.map((d, i)=>{
            return <Todo {...d} key={i} />
          })}
        </div>
      </div>
    )
  }
}

export default App;
