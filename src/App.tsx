import React from 'react';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Story from './pages/story/Story';
import Error from './pages/error/Error';
import Rules from './pages/rules/Rules';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path = "*" element = {<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
