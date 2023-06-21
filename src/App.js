import './App.css';
import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CatchThief from './pages/CatchThief';
import Home from './pages/Home';


function App() {
  
  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home headerText={"Multi-Game-Box"}/>} />
          <Route path="/catchthief" element={<CatchThief headerText={"Catch - Thief"}/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
