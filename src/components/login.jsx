
  
import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import config from "../services/configservices";
import '../CSS/login.css';
import userservice from "../services/userservices";
import pattern from "../configeration/regex";
const patterns = new pattern();
const service = new userservice(); 
export class Login extends Component {
    
    constructor(props){
        super(props);
        this.state={
            Email:"",
            password:"",
            
           
        }
    }
   
    EmailHandler=(e)=>{
        console.log("data",e.target.value); 
       this.setState({Email:e.target.value});  
       console.log("data later",this.state);
       
    };
    passwordHandler=(e)=>{
        console.log("data",e.target.value); 
       this.setState({password:e.target.value});  
       console.log("data later",this.state);
       
    };
   
    Login=(e)=> {
        e.preventDefault();
        console.log("in email",this.state);
       
        let requestData ={
          Email:this.state.Email, 
          password:this.state.password
        }
        console.log(requestData);
        service.LoginData(config.url ,requestData).then((Response=>{
            console.log("data",Response)
        }))

       
    }
   
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
                <div className="TextField">  <TextField id="outlined-search" label="Email" type="text" variant="outlined"  onChange={this.EmailHandler} size="small">Email</TextField></div>
               <div className="TextField"> <TextField id="outlined-search" label="password" type="password" variant="outlined"  onChange={this.passwordHandler}  size="small">password</TextField></div>
               <div>
                    <div className="forgetpass">
                   Forgot Password?
                    </div>
                    <div className="createAccount">   
                     Create account     
                        <div className="buttons" >       
                            <div  ><Button  variant="contained" color="primary" float='right' onClick={this.Login} >Login</Button></div>
                        </div>  
                    </div>
                 </div>
                
            </div>
        );
    }
}

export default Login;
