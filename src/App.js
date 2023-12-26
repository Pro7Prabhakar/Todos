// import './App.css';
import Header from './myComponents/Header';
import { Todos } from './myComponents/Todos';
import { AddTodo } from './myComponents/AddTodo';
import { Footer } from './myComponents/Footer';
// import { About } from './myComponents/About';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log('i m on delete', todo);
    // Deleting this way wont work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index,  1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    console.log('I am adding this todo', title, desc);
    // sno = todos.length + 1;//my technique very effective
    if (todos.length === 0)
      sno = 1;
    else
      sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
        <Header title='My Todos Lists' searchBar={false} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
                <br />
                <br />
                <br />
        <Footer />
    </>
  );
}

export default App;
