import React from 'react'
import './App.css';
import Todo from './Todo'
import Form from './Form'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false,
      text: "",
      data: [
        { id: 1, name: "aaa", completed: false },
        { id: 2, name: "bbb", completed: true },
        { id: 3, name: "ccc", completed: false },
      ]
    }
  }

  
  checkItem(id) {
    console.log(this);
    // const tasks = this.state.data.slice()
    // const updatedTasks = [].map(task => {
    //   if (id === task.id) {
    //     return {...task, completed: !task.completed}
    //   }
    //   return task;
    // });
    // this.setState({data: updatedTasks});
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

    // check if empty input
    if(!e.target.input.value) return;

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
            return (
              <Todo 
                id={'todo-'+d.id} 
                delete={()=>this.handleDelete(i)} 
                checked={d.completed} 
                check={()=>this.checkItem} 
                {...d} key={i} 
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
