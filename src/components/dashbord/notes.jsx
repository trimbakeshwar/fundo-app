import React from 'react';
import '../../CSS/DashbordScss/notescss.scss'
import {NoteIcons} from './iconButtons'

import {TextField} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    // search bar field  
    underline: {
        "&&&:before": {
        borderBottom: "none"
        },
        "&&:after": {
        borderBottom: "none"
        }
    },
}));
export default function Note(props){

    const classes = useStyles();
    return(
        <div className='noteCotainer'>
             <div className='textFieldContainer'>
                <TextField
                  className='textfield' id='tittle'  placeholder='Title' textdecaration='none'  multiline InputProps={{ classes }}   />       
            </div>
            <div className='textFieldContainer'>
                <TextField className='textfield'  placeholder='Take a Note'  textdecaration='none' multiline InputProps={{ classes }} />                
            </div>
            <div  >
                    <NoteIcons />    
            </div>              
        </div>
    );
} 
 