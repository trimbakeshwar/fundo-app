  
import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import '../CSS/login.css';
import "../CSS/recovery.css";
import config from "../services/configservices";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import userservice from "../services/userservices";
import pattern from "../configeration/regex";
const patterns = new pattern();
const service = new userservice(); 
export class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state={
            newPassword:'',
            confirmpassword:'',
            snackbarOpen:false,
            snackbarMessage:'',
            snackServicity:'success'
        }
    }
    changePasswordHandler=(e)=>{
        console.log("pass",e.target.value)
        this.setState=({
            newPassword:e.target.value
        });
        console.log("pass",this.state)
    }
    ChangeconfirmpasswordHandler=(e)=>{
        console.log(" conf pass",e.target.value)
        this.setState=({
            confirmpassword:e.target.value
        });
        console.log("pass",this.state)
    }
    submit=()=>{
        
        if(this.state.newPassword === this.state.confirmpassword){
            this.reset();
        } 
    }

    reset=()=>{
        let requestData ={
            newPassword: this.state.newPassword,
            confirmpassword: this.state.confirmpassword,
   
        }
        console.log("request data",requestData);

        service.ResetPassword(config.url ,requestData).then((response)=>{
            console.log("data",response)
                if(response.status === 204){
                    alert("Registration Sucessfull")
    
                    this.setState({
                        snackbarOpen:true,
                        snackbarMessage: "sucessfully change password",
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
               
                <div className="fundoonamecontainer">
                    <span className="blue">F</span>
                    <span className="red">u</span>
                    <span className="yellow">n</span>
                    <span className="blue">d</span>
                    <span className="green">o</span>
                    <span className="red">o</span>
                </div>
                <div>
                    <span className="signtext">Set new password</span>
                </div>
                <div className="TextField">  <TextField id="outlined-search" label="new password"  type="password" variant="outlined" onChange={this.changePasswordHandler} size="small">newPassword</TextField></div>
                <div className="TextField">  <TextField id="outlined-search" label="confirm password"  type="password" variant="outlined"  onChange={this.ChangeconfirmpasswordHandler}  size="small">confirm password</TextField></div>

                 <div className= "eventButton">
                <Button  variant="contained" color="primary" onClick={this.submit} float='right'>submit</Button>
                <Link to = "/"> <Button  variant="contained" color="primary" float='right'>cancle</Button></Link>
                 </div>
                 <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={this.state.snackServicity}>
                        {this.state.snackbarMessage}
                    </Alert>
                </Snackbar> 
            </div>
        );
    }
}

export default ResetPassword;
