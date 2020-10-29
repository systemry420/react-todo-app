import React from 'react'
import './App.css';


function Todo(props) {
    // console.log(props.delete);
    return (
        <div className="todo" style={ props.completed? {textDecoration: "line-through", color: "gray"}: {}}>
            <input 
                id={props.id}
                onChange={props.check(props.id)}
                type="checkbox"
                name="todos"
                // checked={props.completed} 
                defaultChecked={props.completed}
            />
            <span className="name">{props.name}</span>
            <span className="delete">
                <button onClick={props.delete}>X</button>
            </span>
        </div>
    )
}

export default Todo
