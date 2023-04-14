import React from 'react';
import './App.css';
import Home from './Home';
import Table from './Table';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/Table' element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
