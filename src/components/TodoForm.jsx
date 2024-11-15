import React, { useState } from "react";

const TodoForm = ({createTodo}) => {
  const [value, setvalue]= useState('')
  const handelSubmit= (e)=>{
    e.preventDefault()
    createTodo(value)
    setvalue('')
    
  }
  return (
    <form className="w-full flex items-center my-4" onSubmit={handelSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-full text-white rounded placeholder:text-gray-300"
        placeholder="What task do you have today.?"
        value={value}
        onChange={(e)=>setvalue(e.target.value)}
      />
      <button className="bg-gray-500 border-none p-4 text-white cursor-pointer w-40 rounded ml-2">Add Task</button>
    </form>
  );
};

export default TodoForm;
