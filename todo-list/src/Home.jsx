import React, { useEffect, useState } from 'react';
import Create from './Create';
import './App.css';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsPencilFill, BsTrashFill } from 'react-icons/bs';


function Home() {
    const [ToDoList, setTodos] = useState([])
    
    useEffect(() =>{
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    })

    const handleEdit = (id) => {
      axios.put('http://localhost:3001/update/'+id)
      .then(result => {
        location.reload(result)
      })
      .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result => {
        location.reload(result)
      })
      .catch(err => console.log(err))
    }
 
    const handleToggle = (id) => {
      axios.put('http://localhost:3001/toggle/' + id)
      .then(result => {
        setTodos(ToDoList.map(todo => 
          todo._id === id ? { ...todo, done: !todo.done } : todo
        ))
      })
      .catch(err => console.log(err))
    }
    

  return (
    <div className='home'>
        <h1>My ToDos</h1>
        <Create/>
        <br />
        {
            ToDoList.length === 0 ?
            <div><h2>No Record</h2></div>
            :
            ToDoList.map(todo => (
                <div className='todo'>
                  <div className='box' onClick={() => handleToggle(todo._id)}>
                    {todo.done ? 
                    <BsFillCheckCircleFill/>
                    :<BsCircleFill className='icon'/>
                    }
                    <p className={todo.done ? "line_through" : " "}>{todo.task}</p>
                    <div className='pencil'>
                      <span><BsPencilFill className='icon' onClick={() => handleEdit(todo._id)}/></span>
                    </div>
                    <div>
                      <span><BsTrashFill className='icon' onClick={() => handleDelete(todo._id)}/></span>
                    </div>
                  </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home
