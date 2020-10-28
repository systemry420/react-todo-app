import React from 'react'

function Form(props) {
    console.log(props);
    return (
        <div>
          <form onSubmit={props.onSubmit}>
            <input 
              name="input"   //name to access it
              value={props.value}   // value to control it
              type="text" 
              placeholder="Enter todo item" 
              onChange={props.onChange}   // to handle the change
            />
            <button type="submit">Add</button>
          </form>
        </div>
    )
}

export default Form
