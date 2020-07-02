import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import "../../CSS/DashbordScss/display.scss";
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
        let data = this.props.AllData
        const notes = data.map((values, index) => {
            return(
                <div key={index} className="displayContainer" onMouseEnter={()=>this.onCard(values.id)}  onMouseLeave={()=>this.leaveCard(values.id)} >
                    <Card className="cardContainer" >
                    <div className="title" > {values.title} </div>
                    <div className="Description"> {values.description}</div>
                    </Card>
                </div>
            );
         }) 
         return(notes)   ;
     }
 }

    

 export default Display;
 