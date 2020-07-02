import React, { Component } from "react";

import DashbordService from "../../services/dashbordservices";
import config from "../../services/configservices";
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
        let token = localStorage.getItem("token");
       service.GetNotes(config.url,token).then((Response=>{
         console.log(Response.data.data.data)
          this.setState({AllNotes:Response.data.data.data })
       })).catch((err)=>{
           console.log(err)
       });
    }
    render(){
        return(
            <div>
                <Display  AllData={this.state.AllNotes} />
            </div>
        );
    }
}
export default GetAllNotes;