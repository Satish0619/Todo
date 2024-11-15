import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodo from "./EditTodoForm";
import Navigation from "../Auth/Navigation";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodo] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const [active, setActive] = useState("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoValue));
    console.log(todoValue);
  }, [todoValue]);

  const createTodo = (todo) => {
    if (!todo) return;
    setTodo([
      { id: uuidv4(), task: todo, isEditing: false, Completed: false },
      ...todoValue,
    ]);
  };

  const editTask = (task, id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id == id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const getActiveTodo = (status)=>{
    let completed = 0;
    for (let t of todoValue){
        if (t.Completed){
            completed++
        }
    }
    if (status == "Completed"){
        return completed
    } else if (status == "Pending"){
        return todoValue.length-completed
    }else{
        return todoValue.length
    }
  }

  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md w-full lg:w-1/2 m-auto">
      <h1 className="flex justify-center font-bold text-gray-400 text-2xl mt-[-10]">Hi Satish</h1>
      <hr className="border-gray-600 mt-3 bt-10" />
      <TodoForm createTodo={createTodo} />
      <Navigation setActive={setActive} active={active} getActiveTodo={getActiveTodo} />

      {todoValue.filter((todo) => {
        if (todo.Completed && ["All", "Completed"].includes(active)) {
          return true;
        } else if (!todo.Completed && ["All", "Pending"].includes(active)) {
          return true;
        } else {
          return false;
        }
      }).length==0 && <p className="text-gray-400 ">There is no {active !=='All' && active.toLowerCase()}  tasks </p>}


      {todoValue
        .filter((todo) => {
          if (todo.Completed && ["All", "Completed"].includes(active)) {
            return true;
          } else if (!todo.Completed && ["All", "Pending"].includes(active)) {
            return true;
          } else {
            return false;
          }
        })
        .map((todo, index) =>
          todo.isEditing ? (
            <EditTodo key={index} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              setTodo={setTodo}
              todoValue={todoValue}
            />
          )
        )}
    </div>
  );
};

export default TodoList;
