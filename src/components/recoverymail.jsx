
  
import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import '../CSS/login.css';
import "../CSS/recovery.css";
import config from "../services/configservices";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import userservice from "../services/userservices";
import pattern from "../configeration/regex";
const patterns = new pattern();
const service = new userservice(); 
export class RecoveryMail extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            snackbarOpen:false,
            snackbarMessage:'',
            snackServicity:'success'
           
        }
    }
    handleEmailChange=(e)=>{
        console.log("data",e.target.value); 
        this.setState({email:e.target.value});  
        console.log("data later",this.state);
    }
    submit=()=>{
        console.log("in email",this.state);
       
        let requestData ={
          email:this.state.email, 
       
        }
        console.log("request data",requestData);

        service.Recover(config.url ,requestData).then((response)=>{
            console.log("data",response)
                if(response.status === 200){
                    alert("Registration Sucessfull")
    
                    this.setState({
                        snackbarOpen:true,
                        snackbarMessage: "Registration sucessful",
                        snackServicity:'sucess'
                    })}

        }) 
        .catch((err) => {
            if (err.response.data.error.statusCode === 404) {
                this.setState({
                    snackbarOpen:true,
                    snackbarMessage: "email not foundr",
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
                    <span className="signtext">Find your email</span>
                </div>
                <div>
                    <span className="signtext">Enter your recovery email</span>
                </div>
                    <div className="TextField">  <TextField id="outlined-search" label="Email" type="search" variant="outlined" onChange={this.handleEmailChange} size="small">email</TextField></div>
                
                 <div className= "eventButton">
                 <Button  variant="contained" color="primary" onClick={this.submit} float='right'>submit</Button>
                 <Button  variant="contained" color="primary" float='right'>cancle</Button>
                 </div>
                
            </div>
        );
    }
}

export default RecoveryMail;
