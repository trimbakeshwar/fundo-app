import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import "../../CSS/DashbordScss/display.scss";
import NoteIcons from "./iconButtons"

import Masonry from 'react-masonry-css'
export class Display extends Component{
    constructor(props){
    super(props);
        this.state={
             title:"",
            description:"",
            ID:"",
            breakpointColumnsObj : {
                default:4,
               1717: 4,
               1500: 3,
               1084: 2,
               600: 1
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
     
    render(){
        const notes = this.props.AllData.reverse().map((values, index) => {
            return(
              
                  
                    <Card className="cardContainer" onMouseEnter={()=>this.onCard(values.id)} onMouseLeave={()=>this.leaveCard(values.id)} > 
                        <div className="title" > {values.title} </div>
                        <div className="Description"> {values.description}</div>
                        <div
                            className= {(this.state.ID === values.id) ?
                            'ShowIconButtons' :'hideIconButtons'} >
                            <NoteIcons data={values} />                     
                        </div>
                    </Card>
                   
                
            );
         }) 
         return(
         <div className="display">
         <Masonry
                   breakpointCols={this.state.breakpointColumnsObj}
                   className="masonry-grid"
                   columnClassName="masonry-grid_column"
                 >
           {notes}
           </Masonry>
         </div>)   ;
     }
 }

    

 export default Display;
 