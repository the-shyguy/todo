import React from "react";
import NotFound from "./components/NotFound";
import Todo from "./components/Todo";

const ProtectedRoute = ({ isAuth }) => {
  return <div>{isAuth ? <Todo /> : <NotFound />}</div>;
};

export default ProtectedRoute;
