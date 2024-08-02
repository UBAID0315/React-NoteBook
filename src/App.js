import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, useActionData } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('true') 

  const DarkMode = () => {
    console.log(mode)
    if (mode === true) {
      document.body.style.backgroundColor = "black";
      setMode(false);
    } else {
      document.body.style.backgroundColor = "white";
      setMode(true);
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar title={"INoteBook"} DarkMode={DarkMode} mode={mode}/>
        <Routes>
          <Route path="/" element={""}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
