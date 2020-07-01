import React, { Component } from 'react';
import '../../CSS/DashbordScss/noteButtons.scss'
import IconButton from '@material-ui/core/IconButton';

import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

export class NoteIcons extends Component {
    render() {
        return (
            <div  className='iconsContainer'>
                <div className="button"><IconButton> <AddAlertOutlinedIcon/> </IconButton></div>
                <div className="button"><IconButton> <PersonAddOutlinedIcon/> </IconButton></div>
                <div className="button"><IconButton> <ColorLensOutlinedIcon/> </IconButton></div>
                <div className="button"><IconButton> <ImageOutlinedIcon/> </IconButton></div>
                <div className="button"><IconButton> <ArchiveOutlinedIcon/> </IconButton></div>
                <div className="button"><IconButton> <MoreVertOutlinedIcon/> </IconButton></div>
            </div>
        );
    }
}

export default NoteIcons; 