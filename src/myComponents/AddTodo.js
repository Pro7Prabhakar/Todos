import React, { useState } from 'react';

export const
    AddTodo = ({addTodo}) => {
        let AddTodoStyle = {
            border : '1px solid coral',
            borderRadius : '5px'
        }
        let titleStyle = {
            border : '1px solid black',
            borderRadius : '2px',
            backgroundColor : 'rgba(245,154,145,.8)',
            width: '200px'
        }

        const [title, setTitle] = useState('');
        const [desc, setDesc] = useState('');    
        const submit=(e) =>{
            e.preventDefault();
            if(!title || !desc){
                alert('Title or Description cannot be blank');
            }
            else{
            addTodo(title, desc);
            setTitle('');
            setDesc('');
            }
        }
        return (
            <div className='container my-3' style={AddTodoStyle}>
                <h3 className='text-center my-3 mx-auto p-2' style={titleStyle}>Add a todo</h3>
                <form onSubmit={submit}>
                <div className='jumbotron'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter your todo title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <textarea className="form-control" value={desc} onChange={(e) => {setDesc(e.target.value)}} id="desc" rows="2" placeholder='Enter your todo description'></textarea>
                    </div>
                    <button type="submit" className='btn btn-sm btn-success'>Add Todo</button>
                </div>
                </form>
                <br />
            </div>
        )
    }
