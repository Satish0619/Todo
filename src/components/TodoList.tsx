import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodo from "./EditTodoForm";
import Navigation from "../Auth/Navigation";
import { format, isYesterday, isToday, formatDistanceToNow } from "date-fns";

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
      {
        id: uuidv4(),
        task: todo,
        isEditing: false,
        Completed: false,
        createdAt: new Date(),
      },
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

  const getActiveTodo = (status) => {
    let completed = 0;
    for (let t of todoValue) {
      if (t.Completed) {
        completed++;
      }
    }
    if (status == "Completed") {
      return completed;
    } else if (status == "Pending") {
      return todoValue.length - completed;
    } else {
      return todoValue.length;
    }
  };

  const dates = [
    ...new Set(
      todoValue.map((todo) => new Date(todo.createdAt).toDateString())
    ),
  ];
  const sortedDates = dates.sort((a, b) => new Date(b) - new Date(a));
  console.log(sortedDates, "data.....");

  const [openIndex, setOpenIndex] = useState(0);
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if the same item is clicked again
  };

  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md w-full lg:w-1/2 m-auto">
      <h1 className="flex justify-center font-bold text-gray-400 text-2xl mt-[-10]">
        Hi Satish
      </h1>
      <hr className="border-gray-600 mt-3 bt-10" />
      <TodoForm createTodo={createTodo} />
      <Navigation
        setActive={setActive}
        active={active}
        getActiveTodo={getActiveTodo}
      />

      {/* {todoValue
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
        )} */}

      <div className="w-full  mx-auto">
        {sortedDates.map((date, index) => (
          <div key={index} className="mb-4">
            <div
              onClick={() => toggleItem(index)}
              className="bg-gray-600 text-white py-3 px-4 rounded cursor-pointer hover:bg-gray-800 transition-all ease-in-out duration-300"
            >
              {isToday(date) ? (
                <span>Today</span>
              ) : isYesterday(date) ? (
                <span>Yesterday</span>
              ) : (
                <span>{date}</span>
              )}
            </div>

            {/* Accordion body */}
            {openIndex === index && (
              <div className="bg-gray-800 text-white py-2 px-4   shadow-lg">
                {todoValue
                  .filter((todo) => {
                    if (
                      todo.Completed &&
                      ["All", "Completed"].includes(active)
                    ) {
                      return true;
                    } else if (
                      !todo.Completed &&
                      ["All", "Pending"].includes(active)
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  })
                  .map((todo, index) => {
                    if (new Date(todo.createdAt).toDateString() === date)
                      return todo.isEditing ? (
                        <EditTodo key={index} editTodo={editTask} task={todo} />
                      ) : (
                        <Todo
                          task={todo}
                          key={index}
                          setTodo={setTodo}
                          todoValue={todoValue}
                        />
                      );
                  })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
