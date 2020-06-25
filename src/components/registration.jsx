
  
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import "../CSS/login.css"
import '../CSS/registration.css'
import config from "../services/configservices";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import userservice from "../services/userservices";
import patterns from "../configeration/regex";
const service = new userservice(); 

export class Registration extends Component {
   constructor(props){
       super(props)
       this.state={
        firstName: "",
        lastName: "",
        firstNameError:"",
        lastNameError: "",
        email: "",
        EmailError:"",
        password: "",
        confirmPassword:"",
        passwordError:"",
        confirmPasswordError:"",
        service: 'basic',
         snackbarOpen:false,
            snackbarMessage:"",
            snackServicity:'success'
       }
   }
    firstNameHandler=(e)=>{
        console.log("first name",e.target.value); 
        this.setState({firstName:e.target.value,firstNameError:""});  
        console.log("data after setste first name",this.state);
    }
    lastNameHandler=(e)=>{
        console.log("lastName",e.target.value); 
        this.setState({lastName:e.target.value, lastNameError:""});  
        console.log("data after setste last name",this.state);
    }
    emailHandler=(e)=>{
        console.log("email",e.target.value); 
        this.setState({email:e.target.value, EmailError:""});  
        console.log("data after setste email",this.state);
    }
    passwordHandler=(e)=>{
        console.log("data",e.target.value); 
        this.setState({ password :e.target.value,passwordError:"", MissmatchError:""});  
        console.log("data after setste password",this.state);
    }
    confirmPasswordHandler=(e)=>{
        console.log("data",e.target.value); 
        this.setState({confirmPassword:e.target.value,confirmPasswordError:"", MissmatchError:""});  
        console.log("data after setste confirm pass",this.state);
    }
    ServiceChangehandler=(e)=>{
        console.log("data",e.target.value); 
        this.setState({service:e.target.value});  
        console.log("data after setste confirm pass",this.state);
    }
    Register=(e)=>{
       
        if(!patterns.NamePattern.test(this.state.firstName))
        {
           this.setState({firstNameError:"invalid first name"})
        }
         if(!patterns.NamePattern.test(this.state.lastName))
        {
            this.setState({lastNameError:"invalid last name"})
        }
         if(!patterns.EmailPattern.test(this.state.email))
         {
            this.setState({EmailError:"invalid email"})
         }
          if(!patterns.passwordPattern .test(this.state.password))
         {
            this.setState({passwordError:"invalid password"})
         }
          if(!patterns.passwordPattern .test(this.state.confirmPassword))
         {
            this.setState({confirmPasswordError:"invalid password"})
         }
         if((patterns.NamePattern.test(this.state.firstName))&&(patterns.NamePattern.test(this.state.lastName))&&
         (patterns.EmailPattern.test(this.state.email))&&(patterns.passwordPattern .test(this.state.password))&&
         (patterns.passwordPattern .test(this.state.confirmPassword)))
         {
            console.log("in email",this.state);
           
            let requestData ={
                firstName:this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
                service: this.state.service
            }
            console.log("request data",requestData);
            
            service.RegisterData(config.url ,requestData).then((response)=>{
                console.log("data",response.status)
                if(response.status === 200){
                   
                    this.setState({
                        snackbarOpen:true,
                        snackbarMessage: "Registration sucessful",
                        snackServicity:'sucess'
                    })}
                    this.props.history.push("/");
            }) 
            .catch((error) => {
                console.log(error.response.data.error);
                if (error.response.data.error.statusCode === 500) {
                    this.setState({
                        snackbarOpen:true,
                        snackbarMessage: "fill all fields",
                        snackServicity:"error"
                    })
                }
                if (error.response.data.error.statusCode === 422) {
                    this.setState({
                        snackbarOpen:true,
                        snackbarMessage: "Email already registered",
                        snackServicity:"error"
                    })
                }
            });
         }
    }
    render() {
        return(
            <div className="containersss">
             <div className="Registrationcontainer">
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
                        <span className="labletext">Create your fundoo account</span>
                    </div>
                    <div className="TextInputField">
                        <TextField   id="outlined-search" label="First Name" type="text" variant="outlined" size="small"
                         onChange={this.firstNameHandler} error={this.state.firstNameError} >first Name</TextField>
                        <TextField  id="outlined-search" label="last Name" type="text" variant="outlined" size="small"
                         onChange={this.lastNameHandler} error={this.state.lastNameError} >last Name</TextField>
                     </div>
                    <div className="Field">
                        <br/><TextField id="outlined-search" label="Email" type="Email" variant="outlined" size="small" 
                        onChange={this.emailHandler } error={this.state.EmailError} fullWidth>Email</TextField><br/>
                        <span className="lable"> use my current email address instead</span>
                    </div> 
                    <div className="TextInputField">
                        <TextField   id="outlined-search" label="password" type="password" variant="outlined" 
                        onChange={this.passwordHandler} error={this.state.passwordError} size="small">password</TextField>
                        <TextField  id="outlined-search" label="confirm password" type="password" variant="outlined"
                        onChange={this.confirmPasswordHandler} error={this.state.confirmPasswordError} size="small">confirm password</TextField>
                    </div>
                    <div>
                        <span className="lable"> use 8 or more charecter with a mix of letters, symbols & numbers </span>
                    </div>
                    <div>
                         <label>*service</label><br/>
                         <RadioGroup aria-label="gender" name="gender1" value={this.state.service} onChange={this.ServiceChangehandler} >
                                    <FormControlLabel value="basic" control={<Radio color="primary" />} label="Basic" />
                                    <FormControlLabel value="advance" control={<Radio color="primary" />} label="Advance" />
                         </RadioGroup>
                    </div>
                    <div className= "TextInputField"> 
                       <Link to ="/"> <label className="linkages">sign in insted</label></Link>
                        <Button  variant="contained" color="primary" float='right' onClick={this.Register}>submit</Button>
                    </div>      
                        
                    </div>
                  <div className='imageContainer'>
                    <div className='imgcontainer'>
                      <img className='image'/>
                      <div className='imageText'>One account. All of Fundoo working for you.</div>
                   </div> 
                
            </div>
        </div>
        );
    }
}

export default Registration;
                         /*else if(this.state.password != this.state.confirmPassword)
         {
            this.setState({MissmatchError:"both password not matches"})
         }*/