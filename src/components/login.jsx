
  
import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import config from "../services/configservices";
import '../CSS/login.css';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import userservice from "../services/userservices";
import pattern from "../configeration/regex";
const patterns = new pattern();
const service = new userservice(); 
export class Login extends Component {
    
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            EmailError:"",
            passwordError:"",
            snackbarOpen:false,
            snackbarMessage:'',
            snackServicity:'success'
           
        }
    }
   
    EmailHandler=(e)=>{
        console.log("data",e.target.value); 
       this.setState({email:e.target.value});  
       console.log("data later",this.state);
       
    };
    passwordHandler=(e)=>{
        console.log("data",e.target.value); 
       this.setState({password:e.target.value});  
       console.log("data later",this.state);
       
    };
    
    Login=()=> {

        console.log("in email",this.state);
       
        let requestData ={
          email:this.state.email, 
          password:this.state.password
        }
        console.log("request data",requestData);

        service.LoginData(config.url ,requestData).then((response)=>{
            console.log("data",response.status)
                if(response.status === 200){
                    alert("Registration Sucessfull")
    
                    this.setState({
                        snackbarOpen:true,
                        snackbarMessage: "Registration sucessful",
                        snackServicity:'sucess'
                    })}

        }) 
        .catch((err) => {
            
            console.log(err.response.data.error);
            if (err.response.data.error.statusCode === 401) {
                this.setState({
                    snackbarOpen:true,
                    snackbarMessage: "email not register",
                    snackServicity:"error"
                })
            }
            if (err.response.data.error.statusCode === 400) {
                this.setState({
                    snackbarOpen:true,
                    snackbarMessage: "Email and password requir",
                    snackServicity:"error"
                })
            }
            
        });

       
    }
   
    render() {
        return(
            <div className="logincontainer">
                <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={this.state.snackServicity}>
                        {this.state.snackbarMessage}
                    </Alert>
                </Snackbar> 
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
                <div className="TextField">  <TextField id="outlined-search" label="email" type="text" variant="outlined"  
                onChange={this.EmailHandler} error={this.state.EmailError}  size="small">email</TextField>
              </div>
               <div className="TextField"> <TextField id="outlined-search" label="password" type="password" variant="outlined" 
                onChange={this.passwordHandler} error={this.state.passwordError} size="small">password</TextField>
                </div>
               <div>
                    <div className="forgetpass">
                    <Link to="/resetpassword">Forgot Password?</Link>
                    </div>
                    <div className="createAccount">   
                     <Link to="./registration">Create account</Link>   
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
