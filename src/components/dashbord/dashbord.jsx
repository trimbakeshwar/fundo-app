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
import Note from "./notes"
import { TextField, FormControl } from '@material-ui/core';
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
  
    const handleDrawerMouseClose=()=>{
        DrawersetOpen(false);
      }
    const handleDrawerMouseopen=()=>{
        DrawersetOpen(true);
    }
  
    return (
      <div>
          <div  className='container'>   
              <div  className='Menu'> 
                 <IconButton  > <MenuSharpIcon/> </IconButton> 
              </div>
          <div >
                <TextField  className='inputTextField' type="text" variant="outlined"  
                 InputProps=
                {{startAdornment: (<IconButton> <SearchSharpIcon/> </IconButton>
                  ),
                 }} 
                size="small"placeholder="search" >search</TextField>
          </div>

           <div className="icon">
                <IconButton> <RefreshSharpIcon/> </IconButton>
                <IconButton> <ViewStreamSharpIcon/> </IconButton>
                <IconButton> <SettingsOutlinedIcon/> </IconButton>
           </div> 

           <div className="account">
                <IconButton> <Apps/> </IconButton>
                <IconButton> <AccountCircle/> </IconButton> 
          </div>
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
     
      <ListItem button key={'Notes'} className="notes">
       <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
        <ListItemText primary={'Notes'}/>
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
        <ListItemIcon><ArchiveOutlinedIcon/></ListItemIcon>
        <ListItemText primary={'Archive'}/>
      </ListItem>

      <ListItem button key={'Trash'} className="trash">
        <ListItemIcon>< DeleteOutlinedIcon/></ListItemIcon>
        <ListItemText primary={'Trash'}/>
      </ListItem>         
    </List>  
  </Drawer>
</div>
   
      <Note />
  
</div>
);
}


