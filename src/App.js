import React from 'react'
import './App.css';
import Todo from './Todo'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: "",
      data: [
        { name: "aaa", completed: false },
        { name: "bbb", completed: true },
        { name: "ccc", completed: false },
      ]
    }
  }

  
  checkItem() {
    
  }

  handleChange = (e)=> {
    this.setState({
      text: e.target.value
    })
  }
  
  
  addTodo = e => {
    e.preventDefault()
    console.log('e', e.target.input.value);
  }

  render() {
    return (
      <div className="App">
        <h1>TODOS {this.state.text}</h1>
        <div className="input">
          <form onSubmit={this.addTodo}>
            <input 
              name="input"   //name to access it
              value={this.state.text}   // value to control it
              type="text" 
              placeholder="Enter todo item" 
              onChange={this.handleChange}   // to handle the change
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="todos">
          {this.state.data.map((d, i)=>{
            return <Todo check={()=>this.checkItem} {...d} key={i} />
          })}
        </div>
      </div>
    )
  }
}

export default App;
