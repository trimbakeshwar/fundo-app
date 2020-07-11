import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import '../CSS/login.scss';
import { Link } from 'react-router-dom';
import config from "../services/configservices";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import userservice from "../services/userservices";
import patterns from "../configeration/regex";
const service = new userservice();
export class RecoveryMail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            EmailError: "",
            snackbarOpen: false,
            snackbarMessage: '',
            snackServicity: 'success'
        }
    }
    handleEmailChange = (e) => {
        console.log("data", e.target.value);
        this.setState({
            email: e.target.value,
            EmailError: ""
        });
        console.log("data later", this.state);
    }
    submit = () => {
        console.log("in email", this.state);
        if (!patterns.EmailPattern.test(this.state.email)) {
            this.setState({ EmailError: "invalid mail" })
        }
        else {
            let requestData = {
                email: this.state.email,
            }
            console.log("request data", requestData);
            service.Recover(config.url, requestData).then((response) => {
                console.log("data", response)
                if (response.status === 200) {
                    alert("please check your mail for further process")
                    this.setState({
                        snackbarOpen: true,
                        snackbarMessage: "reset link send on email",
                        snackServicity: 'sucess'
                    })
                }
            })
                .catch((err) => {
                    if (err.response.data.error.statusCode === 404) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "email not found",
                            snackServicity: "error"
                        })
                    }
                });
        }
    }
    render() {
        return (
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
                <div className="TextField">  <TextField id="outlined-search" label="Email" type="search" variant="outlined"
                    onChange={this.handleEmailChange} error={this.state.EmailError} helperText={this.state.EmailError} size="small" fullWidth>email</TextField></div>
                <div className="eventButton">
                    <Link to="/"><Button variant="contained" color="primary" float='right'>cancle</Button></Link>
                    <Button variant="contained" color="primary" onClick={this.submit} float='right'>submit</Button>
                </div>
            </div>
        );
    }
}
export default RecoveryMail;