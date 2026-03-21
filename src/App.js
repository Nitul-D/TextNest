import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Router basename="/TextNest">
    <Navbar title = "TextNest" home = "Home" about = "About Us" mode = {mode} toggleMode = {toggleMode} />
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/About" element={<About mode={mode} />} />
      <Route exact path="/" element={<Form showAlert={showAlert} heading="Analyze Your Text" mode={mode} />} />
      <Route exact path="/Home" element={<Form showAlert={showAlert} heading ="Analyze Your Text" mode ={mode} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
