
import './App.css';
import {Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import { getMainData, getDataActivity } from './services/FetchData';
function App() {
  return (
    <div className="App">
    <Routes>
  
    <Route path="/" element={<Home />} >
      {' '}
    </Route>
   
  </Routes>
    
   getMainData()
   getDataActivity()
    </div>

   
  );

}

export default App;
