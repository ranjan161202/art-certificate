import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import { useState } from "react";
import ImageUpload from "./components/ImageUpload";


function App() {
  const [alert, setAlert] = useState({msg:"",type:""});

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert({msg:"",type:""});
      }, 1500);
  }
  return(
    <>
      <Router>
      <Navbar/>
      {/* <h1 style={{display:"flex", justifyContent:"center"}}>VR Flight Simulator</h1> */}
      <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Signup showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />  
          <Route exact path="/upload" element={<ImageUpload/>} />  
        </Routes>
      </Router>
    </>

  ); 

}

export default App;