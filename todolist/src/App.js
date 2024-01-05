import logo from './logo.svg';
import React,{useContext, useEffect, useState} from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';
// import React,{useState} from 'react';

function App() {
  const [isCompleteScreen,setIsCompleteScreen]=useState(false)
  const [allTodos,setTodos]= useState([]);
  const [newTitle,setNewTitle]=useState("")
  const [newDescription,setNewDescription]=useState("")
  const handleAddTodo =()=>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    }

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  }

  useEffect(()=>{
    let savedTodo=JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
    }

  },[])
  return (
    <div className="App">
      <h1>Yika Todos</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder='enter a title'/>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='enter a description'/>
          </div>
          <div className='todo-input-item'>
            <button className='primaryBtn' onClick={handleAddTodo}>Add</button>
          </div>
        </div>
        <div className='btn-area'>
          <button className={`secondaryBtn isCompleteScreen ${isCompleteScreen === false && `active`}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
          <button className={` secondaryBtn isCompleteScreen ${isCompleteScreen === true && `active`}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
          {allTodos.map((item,index)=>{
            return(
              <div className='todo-list-item' key={index}>
              <h3>{item.title} </h3>
              <p>{item.description}</p>
            </div>
            /* <div>
              <AiOutlineDelete className="icon"/>
              <button className="check-icon">D</button>
            </div> */
            );
          }
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
