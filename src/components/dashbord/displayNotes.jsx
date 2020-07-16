import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import "../../CSS/DashbordScss/display.scss";
import "../../CSS/DashbordScss/trash.scss";
import NoteIcons from "./iconButtons"
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import Masonry from 'react-masonry-css';
import UpdateNotes from "./updateNotes"
import { TextField } from '@material-ui/core'
import { Checkbox, Divider } from "@material-ui/core";
import { Tooltip, Avatar } from "@material-ui/core";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Collaborator from "./collaborator";
const commonUrl="http://fundoonotes.incubation.bridgelabz.com/"
function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
  
    return color;
  }
export class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            ID: "",
            openCard: false,
            Data: "",
            color:"",
            checkList: [""],
            breakpointColumnsObj: {
                default: 4,
                1717: 4,
                1432: 3,
                1084: 2,
                750: 1
            },
        }
    }
    onCard = (id) => {
        this.setState({
            ID: id
        })
    }
    leaveCard = (id) => {
        this.setState({
            ID: id
        })
    }
    updatenote = (Notevalues) => {
        this.setState({
            Data: Notevalues,
            openCard: true
        })
        console.log("update val", this.state.Data)
    }
    onClickOnClose = () => {
        this.setState({
            Data: "",
        })
    }
    handleClose = () => {
        this.setState({
            openCard: false
        })
    }
    updateChecklist=()=>{

    }
  
  
    
    render() {
      
        const notes = this.props.data.reverse().map((values, index) => {
            return (
                <Card className="cardContainer" 
                onMouseEnter={() => this.onCard(values.id)}
                 onMouseLeave={() => this.leaveCard(values.id)}
              style={{
                backgroundColor: `${values.color}`}}>
                     <div>
                {Boolean(values.imageUrl) ? 
                  <img src={commonUrl+values.imageUrl} className="imagecontainer"
                  refreshh={() => this.props.updateOnAdd()} />
                  : undefined
                }
              </div>
                    <div className="title" onClick={() => this.updatenote(values)}> {values.title} </div>
                    <div className="Description" onClick={() => this.updatenote(values)}> {values.description}</div>
                   
                    <div className="collaboratorsetting">
        { 
        Boolean(values.collaborators)?
       values.collaborators.map((colaboratorData, index)=>{
            return(
                <div className="colaborater">
                    <Tooltip title={colaboratorData.email} placement="bottom">
                        <Avatar style={{ "backgroundColor":  "green" }} alt={colaboratorData.firstName} size="small" src="/" ></Avatar>
                    </Tooltip>
                </div>
            );
        }):undefined}

    </div>
    <div className="displaychecklistSetting">
    {Boolean(values.noteCheckLists)?values.noteCheckLists.filter((checklist)=>checklist.status === "open")
    .map((checklist,index)=>{
        return(
            <div className="displayListItem" onClick={()=>this.updateChecklist(values)}>
        <div key={checklist.id}>
            <Checkbox checked={
                checklist.status !== "open" ? "checked" : null
            }   style={{ color: "black" }}/>
            
        </div>
      

        <div style={{paddingTop:"10px"}}>{checklist.itemName}</div>
        </div>
        );
    }):undefined
    }
    {Boolean(values.noteCheckLists)?
    values.noteCheckLists.filter((checklist)=>checklist.status === "close")
    .map((checklist,index)=>{
        return(

            <div className="displayListItem" onClick={()=>this.updateChecklist(values)}>
        <div key={checklist.id}>
            <Checkbox checked={
                checklist.status !== "open" ? "checked" : null
            }  style={{ color: "black" }}/>
            
        </div> 

        <div style={{paddingTop:"10px"}}>{checklist.itemName}</div>
        </div>
      
        );
    }):undefined}
    </div>
                    {values.isDeleted ?
                        <div className={(this.state.ID === values.id) ? 'ShowIconButton' : 'hideIconButton'} >
                            <IconButton><DeleteForeverIcon /></IconButton>
                            <IconButton><RestoreFromTrashIcon /></IconButton>
                        </div> :
                        <div className={(this.state.ID === values.id) ? 'ShowIconButtons' : 'hideIconButtons'} >
                            <NoteIcons
                                data={values}
                                refreshh={() => this.props.updateOnAdd()} />
                        </div>}
                </Card>
            );
        })
      
        return (
            <div>
                <div className='display' >
                    <Masonry
                        breakpointCols={this.state.breakpointColumnsObj}
                        className="masonry-grid"
                        columnClassName="masonry-grid_column" >
                        {notes}
                    </Masonry>
                </div>
                <div>
                    <UpdateNotes OpenCard={this.state.openCard}
                    
                        id={this.state.Data.id}
                        data={this.state.Data}
                        color={this.state.Data.color}
                        imageUrl={this.state.Data.imageUrl}
                        title={this.state.Data.title}
                        description={this.state.Data.description}
                        close={() => this.handleClose}
                        refreshh={() => this.props.updateOnAdd()}
                    />
                </div>
            </div>);

            
    }
}
export default Display;