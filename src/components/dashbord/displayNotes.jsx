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
export class Display extends Component{
    constructor(props){
    super(props);
        this.state={
             title:"",
            description:"",
            ID:"",
            openCard:false,
            Data:"",
            breakpointColumnsObj : {
                default:4,
               1717: 4,
               1500: 3,
               1084: 2,
               800: 1,
               
               },
         }
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
    updatenote=(Notevalues)=>{
        this.setState({
           Data: Notevalues,
           openCard: true
        })
        console.log("update val",this.state.Data)
       
    }
    onClickOnClose=()=>{
        this.setState({
            Data: "",
           
         }) 
        
    }
    handleClose=()=>{
        this.setState({
            openCard:false
        })
      }
    render(){
        
        const notes = this.props.data.reverse().map((values, index) => {
            return(
              
                  
                    <Card className="cardContainer" onMouseEnter={()=>this.onCard(values.id)} onMouseLeave={()=>this.leaveCard(values.id)} > 
                        <div className="title" onClick={()=>this.updatenote(values)}> {values.title} </div>
                        <div className="Description" onClick={()=>this.updatenote(values)}> {values.description}</div>
                        
                       { values.isDeleted? 
                       <div className= {(this.state.ID === values.id) ?'ShowIconButton' :'hideIconButton'} > 
                            <IconButton><DeleteForeverIcon /></IconButton>   
                            <IconButton><RestoreFromTrashIcon /></IconButton>
                       </div> : 
                       <div className= {(this.state.ID === values.id) ?'ShowIconButtons' :'hideIconButtons'} >
                           <NoteIcons data={values}  refreshh={()=>this.props.updateOnAdd()}  />
                       </div>}
                                                
                        
                    </Card>
                    
                
            );
         }) 
         return(
             <div>
           <div className= 'display' >
         <Masonry
                   breakpointCols={this.state.breakpointColumnsObj}
                   className="masonry-grid"
                   columnClassName="masonry-grid_column"
                 >
           {notes}
           </Masonry>
         </div>
         <div>          
          <UpdateNotes  OpenCard={this.state.openCard } 
          
                      id={this.state.Data.id}  
                      title={this.state.Data.title}
                      description={this.state.Data.description}
                      close={()=>this.handleClose}   
                      refreshh={()=>this.props.updateOnAdd()}
       
          />
        </div>
         </div>)   ;
     }
 }

    

 export default Display;
 