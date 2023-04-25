import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import { useState, useEffect } from "react";
import abi from "./contract/image.json";
import {ethers} from "ethers";
import ImageUpload from "./components/ImageUpload";
import Memos from "./components/Memos";


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

    const [state, setState]= useState({
      provider:null,
      signer:null,
      contract:null,
    });
    useEffect(() => {
      const connectWallet = async()=>{
        const contractAddress= "0x5B4BA30f3824ab381b972BEeeda2611F0163B05f";
        const contractABI = abi.abi;
        try{
          const {ethereum}=window;

          if(ethereum){
            await ethereum.request({method:"eth_requestAccounts"})
          }
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer= provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI,signer);
          setState({provider,signer,contract})
        }
      catch(error){
        console.log(error)
      }
    };
    connectWallet()
    }, []);
    console.log(state);
  return(
    <>
      <Router>
      <Navbar/>
      <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Signup showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />  
          <Route exact path="/upload" element={<ImageUpload state={state}/>} />   
          <Route exact path="/transactions" element={<Memos state={state}/>} />   
        </Routes>
      </Router>
    </> 

  ); 

}

export default App;