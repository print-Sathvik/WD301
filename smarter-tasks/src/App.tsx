import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import { NotFound } from "./NotFound";
import { WrongPageHandler } from "./WrongPageHandler";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/signin" && location.pathname !== "/notfound" && (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route
          path="/tasks"
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route
          path="/tasks/:id"
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/:string" element={<WrongPageHandler />} />
      </Routes>
    </div>
  );
}

export default App;
