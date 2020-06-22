
  
import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../CSS/login.css'
export class Login extends Component {
    render() {
        return(
            <div className="logincontainer">
                <div className="fundoonamecontainer">
                    <span className="blue">F</span>
                    <span className="red">u</span>
                    <span className="yellow">n</span>
                    <span className="blue">d</span>
                    <span className="green">o</span>
                    <span className="red">o</span>
                </div>
                <div>
                    <span className="signtext">Sign In</span>
                </div>
                <div className="TextField">  <TextField id="outlined-search" label="Email" type="search" variant="outlined" size="small">Email</TextField></div>
               <div className="TextField"> <TextField id="outlined-search" label="password" type="search" variant="outlined" size="small">password</TextField></div>
               <div>
                    <div className="forgetpass">
                   Forgot Password?
                    </div>
                    <div className="createAccount">   
                     Create account     
                        <div className="buttons" >       
                            <div  ><Button  variant="contained" color="primary" float='right'>Login</Button></div>
                        </div>  
                    </div>
                 </div>
                
            </div>
        );
    }
}

export default Login;
