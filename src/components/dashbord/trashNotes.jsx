import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import "../../CSS/DashbordScss/display.scss";
import NoteIcons from "./iconButtons"
import Masonry from 'react-masonry-css'
import "../../CSS/DashbordScss/trash.scss";
import IconButton from '@material-ui/core/IconButton';
import DashbordService from "../../services/dashbordservices";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
const service = new DashbordService();

export class AllTrashNotes extends Component{
    constructor(props){
        super(props);
        this.state={
            TrashNotes: [],
            title:"",
            discription:"",
            breakpointColumnsObj : {
                default:4,
               1717: 4,
               1432: 3,
               1084: 2,
               750: 1
               },
        };
        this.getTrashAllNotes()

    }
    onCard=(id)=>{
        this.setState({
            ID:id
        })
     }
     leaveCard=(id)=>{
        this.setState({
            ID:id
        })
     }
    getTrashAllNotes=()=>{
       service.GetTrashNotes().then((Response=>{
         console.log(Response.data.data.data)
          this.setState({TrashNotes:Response.data.data.data })
       })).catch((err)=>{
           console.log(err)
       });
    }
   
    render(){
        const TrashData = this.state.TrashNotes.map((values, index) => {
            return(
                    <Card className="cardContainer" onMouseEnter={()=>this.onCard(values.id)}   onMouseLeave={()=>this.leaveCard(values.id)} >
                        <div className="title" > {values.title} </div>
                        <div className="Description"> {values.description}</div>
                        <div
                            className= {(this.state.ID === values.id) ?
                            'ShowIconButton' :'hideIconButton'} >
                            <IconButton><DeleteForeverIcon /></IconButton>   
                            <IconButton><RestoreFromTrashIcon /></IconButton>   
                        </div>
                    </Card>
                   
              
            );
         }) 
         return (
            <div className="trashdisplay">
            <Masonry
                      breakpointCols={this.state.breakpointColumnsObj}
                      className="masonry-grid"
                      columnClassName="masonry-grid_column"
            >
              {TrashData}
            </Masonry>
            </div>
         );
     }
}
export default AllTrashNotes;