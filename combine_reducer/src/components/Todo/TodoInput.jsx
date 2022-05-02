import React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodosError, getTodosLoading, getTodosSuccess } from "../../redux/todo/action.js";

export const TodoInput = () => {
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();
 
  const handleAdd = () => {
    const payload = {
      name,
      status: false,
      id: uuid()
    };
    fetch(`http://localhost:8000/todos`,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(payload)
    }).then(()=>{
      dispatch(getTodosLoading())
      fetch(`http://localhost:8000/todos`).then((res)=>res.json())
      .then((res)=>getTodosSuccess(res))
      .catch((err)=>dispatch(getTodosError()))
    })
    setName("");
  };

  return (
    <div>
      <input
        placeholder="Add Todos"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
