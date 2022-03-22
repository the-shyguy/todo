import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput('');
  };
  return (
    <div className="input_box">
      <div className="input">
        <input
          placeholder="Enter tasks.."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {input === "" && <p className="warning">Do not enter empty task</p>}
    </div>
  );
};

export default Input;
