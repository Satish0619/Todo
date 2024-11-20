import React from "react";

const Navigation = ({ setActive, active, getActiveTodo }) => {
  return (
    <ul className="flex gap-6 capitalize text-gray-400 pt-1 pb-5">
      <li
        onClick={() => setActive("All")}
        className={`cursor-pointer flex gap-1 ${
          active == "All" ? "font-bold text-gray-200" : ""
        } `}
      >
        All{" "}
        <p className="px-1.5 border border-white rounded-lg text-xs ml-1 h-5 mt-1">
          {getActiveTodo("All")}
        </p>
      </li>
      <li
        onClick={() => setActive("Pending")}
        className={`cursor-pointer gap-1 flex ${
          active == "Pending" ? "font-bold text-gray-200" : ""
        } `}
      >
        Pending{" "}
        <p className="px-1.5 border border-white rounded-lg text-xs ml-1 h-5 mt-1">
          {getActiveTodo("Pending")}
        </p>
      </li>
      <li
        onClick={() => setActive("Completed")}
        className={`cursor-pointer flex gap-1 ${
          active == "Completed" ? "font-bold text-gray-200" : ""
        } `}
      >
        Completed{" "}
        <p className="px-1.5 border border-white rounded-lg text-xs ml-1 h-5 mt-1">
          {getActiveTodo("Completed")}
        </p>
      </li>
    </ul>
  );
};

export default Navigation;
