import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosError, getTodosLoading, getTodosSuccess } from '../../redux/todo/action'
import {TodoInput} from './TodoInput'
import TodoItem from './TodoItem'

function Todo() {
  const {todos,error,loading}= useSelector((state)=>state.todos)
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(getTodosLoading())
    fetch("http://localhost:8000/todos")
    .then(res=>res.json())
    .then(res=>dispatch(getTodosSuccess(res)))
    .catch((e)=>dispatch(getTodosError()))
  },[dispatch])
  return (
    <div>
      <TodoInput/>
      <br/>
     { todos.map((todo)=>{
     
       return loading ? (<h1>...Loading</h1>) : error? (<h1>...Error</h1>):(
        <TodoItem key={todo.id} {...todo}/>
       )
      
     })}
    </div>
  )
}

export default Todo