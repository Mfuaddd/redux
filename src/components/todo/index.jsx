import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../../redux/todoSlider";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const todos = useSelector((state) => state.todo.value);
  const [input, setInput] = useState("")
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input type="text" onChange={e=>setInput(e.target.value)} value={input}/>
        <button onClick={()=>dispatch(addTodo({text: input , id: uuidv4()}))}>Add</button>
      </div>
      <ul>
        
        {todos.map((x) => (<li key={x.id} onClick={()=>dispatch(removeTodo(x.id))}>{x.text}</li>))}
      </ul>
    </div>
  );
}

export default Todo;
