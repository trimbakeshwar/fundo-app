import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import Login from "./components/login"
import RecoveryMail from "./components/recoverymail";
import Registration from "./components/registration";
import ResetPassword from "./components/resetpassword";
import Dashbord from "./components/dashbord/dashbord";
import  AllTrashNotes from "./components/dashbord/trashNotes"
  
function App() {
  return (
    <div >
      <Router>
      
     <Route exact path="/" component={Login}/>
     <Route exact path="/registration" component={Registration}/> 
     <Route exact path="/resetpassword/:token" component={ResetPassword}/>
     <Route exact path="/recoverymail" component={RecoveryMail}/>
     <Route exact path="/dashbord" component={Dashbord}/>
     <Route exact path="/trashNotes" component={AllTrashNotes} />
     </Router>
    
    </div>
  );
}

export default App;
