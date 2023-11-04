//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      showAlert("Dark Mode is On", "success");
    }
    else{
      setMode("light");
      showAlert("Light Mode is On", "success");
    }
  }
  const showAlert = (message, type) =>{
    setAlert(
      {msg : message,
      type : type}
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <div style={{ minHeight: "100vh" }} className={`App bg-${mode}`}>

      <Router>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="container">
              <TextForm heading="Enter text below to analyze" mode={mode} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
