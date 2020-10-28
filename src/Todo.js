import React from 'react'
import './App.css';


function Todo(props) {
    // console.log(props.delete);
    return (
        <div className="todo">
            <input readOnly onChange={props.checkItem} type="checkbox" name="todos" checked={props.completed} />
            <span className="name">{props.name}</span>
            <span className="delete">
                <button onClick={props.delete}>X</button>
            </span>
        </div>
    )
}

export default Todo
