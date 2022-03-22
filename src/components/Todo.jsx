import React from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList, removeAll } from "../features/todoSlice";

const Todo = () => {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(removeAll());
  };

  return (
    <div className="todo">
      <h1>Today's Tasks</h1>
      <div className="todo_container">
        {todoList.length > 0 && <button onClick={clearAll}>Clear All</button>}
        <div className="todo_list">
          {todoList.map((item) => (
            <TodoItem
              item={item.item}
              key={item.id}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default Todo;
