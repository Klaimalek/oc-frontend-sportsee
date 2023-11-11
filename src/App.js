
import './App.css';
import {Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';

import Profil from './pages/Home/profil/Profil';
function App() {
  return (
    <div className="App">
    <Routes>
  
    <Route path="/user/:userId" element={<Home />} >
    
      {' '}
    </Route>
    <Route path="/" element={<Profil/>} >
    
    {' '}
  </Route>
  </Routes>
    
  
    </div>

   
  );

}

export default App;
