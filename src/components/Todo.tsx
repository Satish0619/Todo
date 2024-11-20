import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";


const Todo = ({ task, setTodo, todoValue }) => {
  
  
  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  const isComplet = (id) => {
    setTodo(
      todoValue.map((todo) => {
        let toggle = todo.Completed ? false : true;
        return todo.id === id ? { ...todo, Completed: toggle } : todo;
      })
    );
  };
  const editTodo = (id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="flex justify-between items-center bg-gray-600 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
      <div>
        <input
          type="checkbox"
          className="p-2 me-3 scale-125 rounded-2xl"
          onChange={() => isComplet(task.id)}
          checked={task.Completed}
        />
        <label
          htmlFor=""
          className={`text-gray-300 ${task.Completed ? "line-through" : ""}`}
        >
          {task.task}
        </label>
      </div>
      <div className="flex gap-4 items-center ">
        <AiFillEdit className="text-xl" onClick={() => editTodo(task.id)} />
        <BsTrash className="text-xl" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
