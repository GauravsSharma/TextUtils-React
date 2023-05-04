import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  // const [mode2, setmode2] = useState('light');
  // const [mod3, setmode3] = useState('light');
  // const [name, setname] = useState('Darks mode');
  const [border, setborder] = useState('light');
  const toggle = () => {
    if (mode == 'light') {
      setmode('dark');
      // setname('Dark Mode')
      document.body.style.backgroundColor = "#242020";
      setborder("dark");
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setmode('light');
      // setname('Light Mode')
      document.body.style.backgroundColor = "#fff";
      setborder("light");
      showAlert("Light Mode Enabled", "success")
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* // <Router> */}
        <Navbar title={"TextUtils"} toggle={toggle} mode={mode}/>
        <Alert alert={alert} />
        <div className="container my-4">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />}> */}
          {/* </Route> */}
          {/* <Route path="/" element={ <Form heading="Text Converter Using React" mode={mode} border={border} showAlert={showAlert} />}> */}
          <Form heading="Text Converter Using React" mode={mode} border={border} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Routes> */}
        </div>
      {/* </Router>  */}
    </>
  );
}

export default App;
