import React,{useState} from 'react'

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";



function App() {

  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }


  const toggleMode=()=>{
      if(mode === 'light')
      {
       setMode('dark');
       document.body.style.backgroundColor='#042743';
       showAlert("Dark mode has enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has enabled","success");
      }
  }
  return (
   <>
   <Router>
    <Navbar title="GkText" abouttitle="AboutTXL" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
           
 
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Process The Text Here" mode={mode}/>}/>
          
     
      </Routes>
    


    </div>
    </Router>
   </>
  );
}

export default App;
