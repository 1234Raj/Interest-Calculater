import React from 'react';
import CompundI from "./Component/CompundI";
import SimpleI from "./Component/SimpleI";
import { HashRouter, Route, Routes  } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
         <Route path="/" element={<SimpleI/>}/>
         <Route path="/Compound" element={<CompundI/>}/>
         </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
