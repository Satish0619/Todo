import React, { useState } from "react";

const EditTodo = ({editTodo, task}) => {
  const [value, setvalue]= useState(task.task)
  const handelSubmit= (e)=>{
    e.preventDefault()
    editTodo(value, task.id)
    setvalue('')
    
  }
  return (
    <form className="w-full  mb-4" onSubmit={handelSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 py-3 px-4 w-[600px] text-white rounded placeholder:text-gray-300"
        placeholder="Update task"
        value={value}
        onChange={(e)=>setvalue(e.target.value)}
      />
      <button className="bg-gray-500 border-none p-3 text-white cursor-pointer rounded ml-2">Update</button>
    </form>
  );
};

export default EditTodo;
