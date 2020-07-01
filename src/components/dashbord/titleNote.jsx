import React from 'react';
import '../../CSS/DashbordScss/titleNote.scss'

import IconButton from '@material-ui/core/IconButton';
import {TextField} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
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
export default function SmallNotes(props){

    const classes = useStyles();
  

    return(
        <div className='titleNotecontainer'>
             <div className='titleTextField'>
                <TextField id='tittle'  placeholder='Take a note..' textdecaration='none'  onClick={props.click}  multiline InputProps={{ classes }}   />       
            </div>
            <div className='titleNoteIcons'>
                <div> <IconButton><CheckBoxOutlinedIcon fontSize='medium'/></IconButton> </div>
                <div> <IconButton><BrushOutlinedIcon fontSize='medium'/>  </IconButton></div>
                <div> <IconButton><ImageOutlinedIcon fontSize='medium'/> </IconButton> </div>
            </div>
                        
        </div>
    );
} 
 