import React from 'react';
import './App.css';
import Table from './Table';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/Table' element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
