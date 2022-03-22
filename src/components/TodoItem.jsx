import React from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const TodoItem = ({ item, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  console.log(done);
  return (
    <div className="todo_item">
      <input
        type="checkbox"
        name="item"
        checked={done}
        onChange={handleCheck}
      />
      <p className={`${done ? "todoItem_done" : ""}`}>{item}</p>
    </div>
  );
};

export default TodoItem;
