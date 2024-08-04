import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { SignUp } from './Components/SignUp';
import { Login } from './Components/Login';
import { AddNote } from './Components/AddNote';
import { Home } from './Components/Home';
import NoteState from './Contexts/NoteState';
import './App.css';

function App() {

  // Custom states
  const [mode, setMode] = useState('true')
  const [loading, setLoading] = useState('false')

  // Methods
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
  
  const LoadingSpinner = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)      
    }, 1000);
  }

  // Return Body
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar title={"INoteBook"} DarkMode={DarkMode} mode={mode} LoadingSpinner={LoadingSpinner}/>
          <Routes>
            <Route path="/" element={<Home mode={mode}/>}></Route>
            <Route path="/signup" element={<SignUp mode={mode} loading={loading} LoadingSpinner={LoadingSpinner}/>}></Route>
            <Route path="/login" element={<Login mode={mode} loading={loading} LoadingSpinner={LoadingSpinner}/>}></Route>
            <Route path="/addnote" element={<AddNote mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
