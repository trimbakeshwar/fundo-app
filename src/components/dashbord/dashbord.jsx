import React from "react";
import clsx from "clsx";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import "../../CSS/DashbordScss/toolBar.scss"
import IconButton from '@material-ui/core/IconButton';
import ViewStreamSharpIcon from '@material-ui/icons/ViewStreamSharp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Apps from '@material-ui/icons/Apps';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import CreateNote from "./createNote"
import { TextField, FormControl } from '@material-ui/core';
import keepimg from '../../image/keepimg.png'
import Typography from "@material-ui/core/Typography";
import GetAllNotes from "../../components/dashbord/getAllNotes";

import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { Tooltip } from "@material-ui/core";
import {Link } from "react-router-dom";
const drawerWidth = 250;
const drawerTopMargin = 69;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "100px",
    
  },
 
 
  drawer: {
     
    width: drawerWidth,
    marginTop: drawerTopMargin,
    flexShrink: 0,
    whiteSpace: "nowrap",
  
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerOpensetting: {
    width: drawerWidth,
   
    marginTop: drawerTopMargin,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerClosesetting: {
    marginTop: drawerTopMargin,
    borderStyle: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: "40px",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
 
 
}));
export default function Dashboard() {
    const classes = useStyles();
    const theme = useTheme();
    const [Draweropen, DrawersetOpen] = React.useState(false);
  const [noteOpen,setNoteOpen] = React.useState(false)
    const handleDrawerMouseClose=()=>{
        DrawersetOpen(false);
      }
    const handleDrawerMouseopen=()=>{
        DrawersetOpen(true);
    }
    const NoteHandler = (eve) =>{    
      setNoteOpen(!noteOpen);
    
   }; 
   const handleDrawerOpen = () => {
    DrawersetOpen(true);
  };
  const handleDrawerClose = () => {
    DrawersetOpen(false);
  };
    return (
      <div > 
        
    <div className="{classes.root}">
      <CssBaseline />
      <AppBar position="fixed" color="white" className={clsx(classes.appBar, {[classes.appBarShift]: Draweropen,})} >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}  onClose={handleDrawerClose}  edge="start"
            className={clsx(classes.menuButton)} ><MenuIcon /> </IconButton>
          <div className="keepimage">
            <img src={keepimg} alt="Keep Logo" />
          </div>
          <div className="keep">
            <Typography className="keep" variant="h6" noWrap>
              Fundoo
            </Typography>
          </div>
          <div className="searchBar">
            <div>
            <IconButton><SearchIcon /></IconButton>
            </div>
            <div  className="inputtextField">
              <TextField placeholder="Search"    
              InputProps={{disableUnderline: true,}} multiline fullWidth>search</TextField>
            </div>
          </div>
          <div className="icon">
                <IconButton> <RefreshSharpIcon/> </IconButton>
                <IconButton> <ViewStreamSharpIcon/> </IconButton>
               
           </div> 

           <div className="account">
              
                <IconButton> <AccountCircle/> </IconButton> 
          </div>
            
        </Toolbar>
      </AppBar>
          </div>
            <div className="drawer">
               <Drawer   
                 variant="permanent"
                 className={clsx(classes.drawer, {
                 [classes.drawerOpensetting]: Draweropen,
                 [classes.drawerClosesetting]: !Draweropen,
                  })}
                  classes={{
                  paper: clsx({
                  [classes.drawerOpensetting]: Draweropen,
                  [classes.drawerClosesetting]: !Draweropen,
                    }),
                  }} >
  
     <List  onMouseEnter={handleDrawerMouseopen} onMouseLeave={handleDrawerMouseClose}>
     
      <ListItem button key={'Notes'}  className="notes">
       <ListItemIcon ><EmojiObjectsOutlinedIcon  /></ListItemIcon>
        <ListItemText  primary={'Notes'}/>
      </ListItem>

      <ListItem button key={'Remainders'} className="remainder">
        <ListItemIcon><NotificationsOutlinedIcon/></ListItemIcon>
        <ListItemText primary={'Remainders'}/>
      </ListItem>

      <ListItem button key={'Editlabels'} className="editlabels">
        <ListItemIcon>< EditOutlinedIcon/></ListItemIcon>
        <ListItemText primary={'Edit labels'}/>
      </ListItem>

      <ListItem button key={'Archive'} className="archive">
      <Link to="/archiveNote"><ListItemIcon><ArchiveOutlinedIcon/></ListItemIcon></Link>
        <ListItemText primary={'Archive'}/>
      </ListItem>

      <ListItem button key={'Trash'} className="trash">
      <Link to="/trashNotes"><ListItemIcon>< DeleteOutlinedIcon/></ListItemIcon></Link>
        <ListItemText primary={'Trash'}/>
      </ListItem>         
    </List>  
  </Drawer>
</div>
<main
        className={clsx(classes.content, {
          [classes.contentShift]: Draweropen,
        })}
      >
<div>
<GetAllNotes />
</div>
</main>
</div>
);
}

