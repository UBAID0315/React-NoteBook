import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { SignUp } from './Components/SignUp';
import { Login } from './Components/Login';
import { AddNote } from './Components/AddNote';
import { Home } from './Components/Home';
import { Notes } from './Components/Notes';
import NoteState from './Contexts/Notes/NoteState';
import './App.css';
import { UpdateForm } from "./Components/UpdateForm";

function App() {
  // Return Body
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar title={"INoteBook"} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/addnote" element={<AddNote />}></Route>
            <Route path="/savenotes" element={<Notes />}></Route>
            {/* <Route path="/updatenote" element={''}></Route> */}
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
