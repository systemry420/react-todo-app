import React from 'react'
import './App.css';


function Todo(data) {
    return (
        <div className="todo">
            <input readOnly onChange={data.checkItem} type="checkbox" name="todos" checked={data.completed} />
            <span className="name">{data.name}</span>
            <span className="delete">
                X
            </span>
        </div>
    )
}

export default Todo
