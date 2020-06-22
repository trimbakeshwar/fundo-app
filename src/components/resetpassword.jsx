  
import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import '../CSS/login.css';
import "../CSS/recovery.css";
export class ResetPassword extends Component {
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
                <div className="TextField">  <TextField id="outlined-search" label="password" text ="password" type="search" variant="outlined" size="small">password</TextField></div>
                <div className="TextField">  <TextField id="outlined-search" label="confirm password" text ="password" type="search" variant="outlined" size="small">confirm password</TextField></div>

                 <div className= "eventButton">
                 <Button  variant="contained" color="primary" float='right'>submit</Button>
                 <Button  variant="contained" color="primary" float='right'>cancle</Button>
                 </div>
                
            </div>
        );
    }
}

export default ResetPassword;
