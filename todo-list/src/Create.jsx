import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  const handleAdd = () =>{
    axios.post('http://localhost:3001/add', {task: task})
    .then(result =>  {
      location.reload(result)
    })
    .catch(err=> console.log(err))
  }
  return (
    <div className='create-form'>
        <input type='text' name='' id='' placeholder='Enter Text' onChange={(e)=> setTask(e.target.value)}></input>
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create