
import './App.css';
import {Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Error from './pages/Home/error/Error';

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
  <Route path="/404" element={<Error/>} />
  </Routes>
    
  
    </div>

   
  );

}

export default App;
