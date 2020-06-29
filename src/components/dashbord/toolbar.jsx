
import React, { Component } from 'react';
import "../../CSS/DashbordScss/toolBar.scss"
import IconButton from '@material-ui/core/IconButton';
import ViewStreamSharpIcon from '@material-ui/icons/ViewStreamSharp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { TextField, FormControl } from '@material-ui/core';
export class NoteIcons extends Component {
    render() {
        return (
            <div  className='container'>
             
             <div  className='Menu'> 
                <IconButton> <MenuSharpIcon/> </IconButton> 
             </div>
             <div >
          
            
           <TextField  className='inputTextField' type="text" variant="outlined"  
            InputProps=
            {{startAdornment: (<IconButton> <SearchSharpIcon/> </IconButton>
              ),
             }} 
                 size="small"placeholder="search" >search</TextField>

          

             </div>
             <div className="icon">
                <IconButton> <RefreshSharpIcon/> </IconButton>
                <IconButton> <ViewStreamSharpIcon/> </IconButton>
                <IconButton> <SettingsOutlinedIcon/> </IconButton>
            </div> 
            <div className="account">
                
                <IconButton> <Apps/> </IconButton>
                <IconButton> <AccountCircle/> </IconButton>
                </div>
                
            </div>
        );
    }
}

export default NoteIcons;
