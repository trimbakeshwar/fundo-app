import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import "../../CSS/DashbordScss/display.scss";
import NoteIcons from "./iconButtons"
export class Display extends Component{
    constructor(props){
    super(props);
        this.state={
             title:"",
            description:"",
            ID:""
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
     
    render(){
     
        const notes = this.props.AllData.map((values, index) => {
            return(
                <div  className="displayContainer"
                  onMouseEnter={()=>this.onCard(values.id)} 
                  onMouseLeave={()=>this.leaveCard(values.id)} >
                    <Card className="cardContainer" >
                        <div className="title" > {values.title} </div>
                        <div className="Description"> {values.description}</div>
                        <div
                            className= {(this.state.ID === values.id) ?
                            'ShowIconButtons' :'hideIconButtons'} >
                            <NoteIcons />                     
                        </div>
                    </Card>
                   
                </div>
            );
         }) 
         return(notes)   ;
     }
 }

    

 export default Display;
 