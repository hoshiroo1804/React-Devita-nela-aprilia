import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import React from "react";
import "./index.css";
import Createpage from './pages/Createpage';
import LandingPages from './pages/LandingPages';
import Detail from './users/Detail11';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages/>}/>
        <Route path="/create" element={<Createpage/>}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
