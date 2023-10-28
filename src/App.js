//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/*import About from './components/About';*/
import Alert from './components/Alert';
import React, { useState } from 'react'


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
    <div style={{minHeight: "100vh"}} className={`App bg-${mode}`}>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter text below to analyze" mode={mode} />
  </div>
  {/*<About />*/}
    </div>
  );
}

export default App;
