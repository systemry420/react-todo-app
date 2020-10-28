import React from 'react'
import './App.css';
import Todo from './Todo'
import Form from './Form'

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

  handleDelete(id){
    // obtain a new array, without the deleted element
    const filtered = this.state.data.filter((d, i)=>{
      return i!== id 
    })

    // set the new array
    this.setState({
      data: filtered
    })
  }
  
  
  addTodo = e => {
    e.preventDefault()

    // create a copy of data
    const newArr = this.state.data.slice()

    // push the new item
    newArr.push({ name: this.state.text, completed: false})

    // set new data
    this.setState({
      data: newArr
    })

    // reset input
    this.setState({text: ''})
  }

  render() {
    return (
      <div className="App">
        <h1>TODOS</h1>
        <div className="input">
          <Form 
            onSubmit={this.addTodo} 
            onChange={this.handleChange} 
            value={this.state.text} 
          />
        </div>
        <div className="todos">
          {this.state.data.map((d, i)=>{
            return <Todo delete={()=>this.handleDelete(i)} check={()=>this.checkItem} {...d} key={i} />
          })}
        </div>
      </div>
    )
  }
}

export default App;
