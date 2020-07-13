import React, { Component } from 'react';
import {
    Tooltip,
    
    Menu,
    Grid,
    createMuiTheme,
    MuiThemeProvider,
  } from "@material-ui/core";
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import IconButton from '@material-ui/core/IconButton';
import DashbordService from "../../services/dashbordservices";
import "../../CSS/DashbordScss/color.scss"
const service = new DashbordService();
const theme = createMuiTheme({
    overrides: {
      MuiMenu: {
        paper: {
          height: "auto",
          width: "139px",
          "justify-content": "space-around",
        },
      },
    },
  });
  
export default class ColourPallet extends Component{
    constructor(props){
        super(props)
        this.state={
            selected:'#FFFFFF',
            colours: [
                '#D7AEFB',
                '#FDCFE8',
                '#A7FFEB',
                '#CBF0F8',
                '#FBBC04',
                '#FFF475',
                '#CCFF90',
                '#FFFFFF',
                '#F28B82',
                '#AECBFA',
                '#E6C9A8',
                '#E8EAED',                
            ],
            anchorEl: null,
            open:false
        }
    }
    handleToggle() {
        this.setState({ open: true });
      }
      closePopper() {
        this.setState({
          open: false,
        });
      }
      handleColor = (event) => {
        this.setState({ anchorEl: event.currentTarget });
       // console.log("anchorEl",this.state.anchorEl)
      };
      updateColor=(color)=>{
        console.log(color)
        this.setState({anchorEl:null});
        this.setState({
            selected:color,
        });
        let colorData = {
            noteIdList:[this.props.NoteId.id],
            color:`${color}`
        }
        console.log("color",colorData)
        service.ChangeColour(colorData).then((Response)=>{
            console.log(Response)
        }).catch((err)=>{
            console.log(err)
        })
        this.props.refresh()
      }
    render(){
        const color = this.state.colours.map((key,index)=>{
            return(
                <div
                className="color"
                style={{
                  margin: "1px",
                  backgroundColor:` ${key}`,
                  alignItems: "center",
                  cursor: "pointer",
                  height: "28px",
                  width: "28px",
                }}
                onClick={() => this.updateColor(key)}
               
              ></div>
            
            );
        })
        return(
        <div >
            <IconButton 
            onClick={this.handleColor}>
            <ColorLensOutlinedIcon/>
          </IconButton>
          <MuiThemeProvider theme={theme} >
          <Menu
             id="color-menu"
            anchorEl={this.state.anchorEl}
            placement={"bottom"}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
            alignItems="center"
            style={{ width: "100%" }}
          >
            <Grid className="colorgrid">{color}</Grid>
          </Menu>
          </MuiThemeProvider>
          </div>
        )
    }
}