
import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../CSS/login.scss';
import config from "../services/configservices";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import userservice from "../services/userservices";
import patterns from "../configeration/regex";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const service = new userservice();
export class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPassword: "",
            confirmpassword: "",
            newPasswordError: "",
            confirmpasswordError: "",
            visability: false,
            token: this.props.match.params.token,
            snackbarOpen: false,
            snackbarMessage: "",
            snackServicity: 'success'
        }
    }
    changePasswordHandler = (e) => {
        console.log("pass", e.target.value);
        this.setState({ newPassword: e.target.value, newPasswordError: "" });
        console.log("pass later", this.state);
    }
    ChangeconfirmpasswordHandler = (e) => {
        console.log("conf", e.target.value);
        this.setState({ confirmpassword: e.target.value, confirmpasswordError: "" });
        console.log("conf later", this.state);
    }
    visableIconHandler = eve => {
        this.state.visability ?
            this.setState({ visability: false })
            : this.setState({ visability: true })
    }

    checkEquality = () => {
        if (this.state.newPassword === this.state.confirmpassword) {

            this.submit();
        }
        else {
            alert("password and confirm password not same");
        }
    }


    submit = () => {
        if (!patterns.passwordPattern.test(this.state.newPassword)) {
            this.setState({ newPasswordError: "invalid password" })
        }
        if (!patterns.passwordPattern.test(this.state.confirmpassword)) {
            this.setState({ confirmpasswordError: "invalid password" })
        }
        if ((patterns.passwordPattern.test(this.state.newPassword)) && (patterns.passwordPattern.test(this.state.confirmpassword))) {
            let requestData = {
                newPassword: this.state.newPassword,
            }
            service.ResetPassword(config.url, requestData, this.state.token).then((response) => {
                console.log("data", response)
                if (response.status === 204) {
                    this.setState({
                        snackbarOpen: true,
                        snackbarMessage: "sucessfully change password",
                        snackServicity: 'sucess'
                    })
                }
            })
                .catch((err) => {
                    console.log(err.response.data.error);
                    if (err.response.data.error.statusCode === 401) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "unotherized ",
                            snackServicity: "error"
                        })
                    }
                    if (err.response.data.error.statusCode === 400) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "please enter all field ",
                            snackServicity: "error"
                        })
                    }
                });
        }
    }
    render() {
        return (
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
                <div className="TextField">  <TextField id="outlined-search" label="new password" type="password" variant="outlined"
                    onChange={this.changePasswordHandler} error={this.state.newPasswordError} helperText={this.state.newPasswordError}
                    type={this.state.visability ? 'text' : 'password'} size="small" fullWidth>new Password</TextField></div>
                <div className="TextFields">  <TextField id="outlined-search" label="confirm password" type="password" variant="outlined"
                    onChange={this.ChangeconfirmpasswordHandler} error={this.state.confirmpasswordError} helperText={this.state.confirmpasswordError}
                    type={this.state.visability ? 'text' : 'password'} size="small"
                    InputProps={{
                        endAdornment: (
                            <div onClick={this.visableIconHandler}>
                                {this.state.visability ? <VisibilityIcon className="visibility" /> : <VisibilityOffIcon />}
                            </div>
                        )
                    }} fullWidth>confirm password</TextField></div>
                <div className="eventButton">
                    <Button variant="contained" color="primary" onClick={this.checkEquality} float='right'>submit</Button>
                    <Link to="/"> <Button variant="contained" color="primary" float='right'>cancle</Button></Link>
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