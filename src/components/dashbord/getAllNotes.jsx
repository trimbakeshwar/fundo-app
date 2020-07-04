import React, { Component } from "react";

import "../../CSS/DashbordScss/display.scss";
import DashbordService from "../../services/dashbordservices";
import config from "../../services/configservices";
import CreateNote from "./createNote"
import Display from "./displayNotes"
const service = new DashbordService();

export class GetAllNotes extends Component{
    constructor(props){
        super(props);
        this.state={
            AllNotes: [],
            title:"",
            discription:""
        };
        this.getAllNotes()

    }
    getAllNotes=()=>{
       service.GetNotes().then((Response=>{
         console.log(Response.data.data.data)
          this.setState({AllNotes:Response.data.data.data })
       })).catch((err)=>{
           console.log(err)
       });
    }
    UpdateOnChange=()=>{
        this.getAllNotes();
    }
    render(){
        return(
            <div> 
               <div className="refresh data">
               <CreateNote updateOnAdd={()=>this.getAllNotes()}></CreateNote>
               </div>
              <div className="storage">
                <Display  AllData={this.state.AllNotes} />
                </div>
            </div>
        );
    }
}
export default GetAllNotes;