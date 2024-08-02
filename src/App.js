import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from './Contexts/NoteState';

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
      <NoteState>
        <Router>
          <Navbar title={"INoteBook"} DarkMode={DarkMode} mode={mode} />
          <Routes>
            <Route path="/" element={""}></Route>
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
