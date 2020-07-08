import React, { Component } from 'react';
import '../../CSS/DashbordScss/noteButtons.scss'
import IconButton from '@material-ui/core/IconButton';
import MoreOptions from "./optionMenue";
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import {Tooltip} from "@material-ui/core";

import DashbordService from "../../services/dashbordservices";
const service = new DashbordService();

export class NoteIcons extends Component {
    
    ArchiveNoteHandler=()=>{
        let requestData={
            noteIdList: [this.props.data.id],
            isArchived: true
        }
       service.AddInArchive(requestData).then((Response)=>{
           console.log(Response)
       }).catch((err)=>{
        console.log(err)
       })
       this.props.refreshh();
    }
    render() {
       
        return (
            <div  className='iconsContainer'>
                 <Tooltip title="Reminde me"> 
                 <div className="button" ><IconButton > <AddAlertOutlinedIcon fontSize="small"/> </IconButton></div>
                 </Tooltip>
                 <Tooltip title="Colabrator">
                 <div className="button"><IconButton > <PersonAddOutlinedIcon fontSize="small"/> </IconButton></div>
                 </Tooltip>
                 <Tooltip title="change Color">
                 <div className="button"><IconButton> <ColorLensOutlinedIcon closefontSize="small"/> </IconButton></div>
                </Tooltip>
                 <Tooltip title="image add">
                 <div className="button"><IconButton > <ImageOutlinedIcon fontSize="small"/> </IconButton></div>
                 </Tooltip>
                 <Tooltip title="Archive">
                 <div className="button"><IconButton onClick={this.ArchiveNoteHandler}> <ArchiveOutlinedIcon fontSize="small"/> </IconButton></div>
                 </Tooltip>
                <div className="button"><IconButton > <MoreOptions NoteId={this.props.data}  refresh={()=>this.props.refreshh()} fontSize="small"/> </IconButton></div>
            </div>
        );
    }
}

export default NoteIcons; 