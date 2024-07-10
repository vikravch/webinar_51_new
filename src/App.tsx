import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./features/home/pages/HomePage";
import LoginPage from "./features/auth/pages/LoginPage";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage/>} path={'/'}/>
      <Route element={<LoginPage/>} path={'/login'}/>
      <Route element={<ErrorPage/>} path={'*'}/>
    </Routes>
  );
}

export default App;
