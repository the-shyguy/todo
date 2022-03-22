import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="login">
              <h1>Login to access Todo List</h1>
              <Link to="/todo">
                <button
                  className="login_btn"
                  onClick={() => {
                    setIsAuth(true);
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          }
        />
        <Route
          path="/todo"
          element={<ProtectedRoute component={Todo} isAuth={isAuth} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
