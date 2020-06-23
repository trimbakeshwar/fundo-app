import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import Login from "./components/login"
import RecoveryMail from "./components/recoverymail";
import Registration from "./components/registration";
import ResetPassword from "./components/resetpassword";
function App() {
  return (
    <div >
      <Router>
      <Route exact path="/" component={Login}/>
     <Route exact path="/registration" component={Registration}/> 
     <Route exact path="/resetpassword" component={ResetPassword}/>
     <Route exact path="/recoverymail" component={RecoveryMail}/>
     </Router>
    
    </div>
  );
}

export default App;
