import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginComponent from './pages/admin/login';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path={"/login"} element={<LoginComponent />} />
        </Routes>
    </div>
  );
}

export default App;
