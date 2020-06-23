
  
import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import "../CSS/login.css"
import '../CSS/registration.css'
export class Registration extends Component {
    render() {
        return(
            <div className="containersss">
             <div className="Registrationcontainer">
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
                        <TextField   id="outlined-search" label="First Name" type="text" variant="outlined" size="small" >first Name</TextField>
                        <TextField  id="outlined-search" label="last Name" type="text" variant="outlined" size="small" >last Name</TextField>
                     </div>
                    <div className="Field">
                        <br/><TextField id="outlined-search" label="Email" type="Email" variant="outlined" size="small" fullWidth>Email</TextField><br/>
                        <span className="lable"> use my current email address instead</span>
                    </div> 
                    <div className="TextInputField">
                        <TextField   id="outlined-search" label="password" type="password" variant="outlined" size="small">password</TextField>
                        <TextField  id="outlined-search" label="confirm password" type="password" variant="outlined" size="small">confirm password</TextField>
                    </div>
                    <div>
                        <span className="lable"> use 8 or more charecter with a mix of letters, symbols & numbers </span>
                    </div>
                    <div>
                         <label>*service</label><br/>
                         <Radio  value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}></Radio>
                         <label>basic</label>
                         <Radio  value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}></Radio>
                         <label>advance</label>
                    </div>
                    <div className= "TextInputField"> 
                        <label className="linkages">sign in insted</label>
                        <Button  variant="contained" color="primary" float='right'>submit</Button>
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
/*<div className="Field">
                          <TextField id="outlined-search" label="Email" type="Email" variant="outlined" size="small">Email</TextField><br/>
                          <span className="lable"> use my current email address instead</span>

                    </div>
                    <div className="TextInputField">
                          <TextField   id="outlined-search" label="password" type="password" variant="outlined" size="small">password</TextField>
                          
                          <TextField  id="outlined-search" label="confirm password" type="password" variant="outlined" size="small">confirm password</TextField><br/>
                          <span className="lable"> use 8 or more charecter with a mix of letters, symbols & numbers </span>
                          
                    </div>
                    <div>
                    <br/>
                    <label>*service</label><br/>
                         <Radio  value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}></Radio>
                         <label>basic</label>
                         <Radio  value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}></Radio>
                         <label>advance</label>
                    </div>
                    <div className= "registrationButton"> 
                        <label className="linkages">sign in insted</label>
                        <Button  variant="contained" color="primary" float='right'>submit</Button>

                    </div>*/