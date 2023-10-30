import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersView from "./components/UsersView";
import UserInfoView from "./components/UserInfoView";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersView />} />
        <Route path="/user/:id" element={<UserInfoView />} />
      </Routes>
    </Router>
  );
}

export default App;
