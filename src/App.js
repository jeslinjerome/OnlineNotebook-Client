import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>
     <Router>
        <Navbar />
        {/* <Alert message="This is an amazing React Course"/> */}
        <div className = "container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
