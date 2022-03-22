import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="not_found">
      <h2 className="warning_head">Please login to access Todo List</h2>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
};

export default NotFound;
