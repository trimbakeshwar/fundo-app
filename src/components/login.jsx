import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import config from "../services/configservices";
import '../CSS/login.scss';
import "../CSS/registration.scss"
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import userservice from "../services/userservices";
import patterns from "../configeration/regex";
import auth from "../authgards/auth"
const service = new userservice();
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            EmailError: "",
            passwordError: "",
            snackbarOpen: false,
            snackbarMessage: '',
            token: "",
            snackServicity: 'success'
        }
    }
    EmailHandler = (e) => {
        this.setState({ email: e.target.value, EmailError: "" });
    };
    passwordHandler = (e) => {
        console.log("data", e.target.value);
        this.setState({ password: e.target.value, passwordError: "" });
        console.log("data later", this.state);
    };
    Login = () => {
        if (!patterns.EmailPattern.test(this.state.email)) {
            this.setState({ EmailError: "invalid mail" })
        }
        if (!patterns.passwordPattern.test(this.state.password)) {
            this.setState({ passwordError: "invalid password" })
        }
        if ((patterns.EmailPattern.test(this.state.email)) || (patterns.passwordPattern.test(this.state.password))) {
            let requestData = {
                email: this.state.email,
                password: this.state.password
            }
            console.log("request data", requestData);
            service.LoginData(config.url, requestData).then((response) => {
                console.log("data", response)
                if (response.status === 200) {
                    window.localStorage.setItem("token", response.data.id)
                    window.localStorage.setItem("firstName", response.data.firstName)
                    window.localStorage.setItem("lastName", response.data.lastName)
                    window.localStorage.setItem("email", response.data.email)
                    this.setState({
                        snackbarOpen: true,
                        snackbarMessage: "login sucessful",
                        snackServicity: 'sucess'
                    })
                    auth.login();
                    if (auth.isAuthenticated) {
                        this.props.history.push('./dashbord/Notes');
                    }
                }
            })
                .catch((err) => {
                    console.log(err.response.data.error);
                    if (err.response.data.error.statusCode === 401) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "invalid email or password",
                            snackServicity: "error"
                        })
                    }
                    if (err.response.data.error.statusCode === 400) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "Email and password requir",
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
                    <span className="signtext">Sign In</span>
                </div>
                <div className="TextField">  <TextField id="outlined-email" label="email" type="text" variant="outlined"
                    onChange={this.EmailHandler} error={this.state.EmailError} helperText={this.state.EmailError} size="small" fullWidth>email</TextField><br />
                </div>
                <div className="TextField"> <TextField id="outlined-password" label="password" type="password" variant="outlined"
                    onChange={this.passwordHandler} error={this.state.passwordError} helperText={this.state.passwordError} size="small" fullWidth>password</TextField>
                </div>
                <div>
                    <div className="forgetpass">
                        <Link to="/recoverymail" style={{ textDecoration: 'none' }} fullWidth>Forgot Password?</Link>
                    </div>
                    <div className="distancnButtons">
                        <Link to="./registration" style={{ textDecoration: 'none' }} fullWidth>Create account</Link>
                        <Button variant="contained" color="primary" float='right' onClick={this.Login} >Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;