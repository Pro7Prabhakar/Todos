import React from 'react'
import {TodoItems} from './TodoItems'

export const Todos = (props) => {
  let titleStyle = {
    border : '1px solid black',
    borderRadius : '2px',
    backgroundColor : 'rgba(245,154,145,.8)',
    width: '200px'
  }
  //  let myStyle = {
  //   minHeight : '65vh',
  //   margin : '40px auto'
  //  }
  return (
    <div className='container my-3' //style={myStyle}
    >
        <h3 className='text-center mx-auto p-2' style={titleStyle}>Todos List</h3>
        {props.todos.length === 0 ? <h4 to="/change" style={{ textDecoration: 'underline red' }} className='text-center'>No todos to display</h4> : 
        props.todos.map((todo) => 
        {
            return (
            <TodoItems todo = {todo} key={todo.sno} onDelete = {props.onDelete}/> 
            )
        })
        }
    <br />
    </div>
  )
}
