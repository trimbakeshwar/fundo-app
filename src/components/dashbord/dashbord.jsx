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
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';
import { TextField, FormControl } from '@material-ui/core';
import keepimg from '../../image/keepimg.png'
import {  Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import "../../CSS/DashbordScss/dashborditem.scss"
import { Link } from "react-router-dom";
import PrivateRoute from "../../authgards/authgard";
import getAllNotes from "./getAllNotes";
import trashNotes from "./trashNotes";
import archiveNote from "./archiveNote"
const drawerWidth = 250;
const drawerTopMargin = 69;
function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);

  return color;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "100px",
  },
  appBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      check: 1,
    },
    check: 0,
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
    paddingLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      paddingLeft: drawerWidth,
    },
    paddingLeft: 0,
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
    width: "60px",
    [theme.breakpoints.up("xl")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));
export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [Draweropen, DrawersetOpen] = React.useState(false);
  const [trashclick, setTrashClick] = React.useState(false);
  const [Archiveclick, setArchiveClick] = React.useState(false);
  const [getAll, setGetAll] = React.useState(true);
  const [searchtextField, setsearchtextField] = React.useState(false)
  const handleDrawerMouseClose = () => {
    DrawersetOpen(false);
  }
  const handleDrawerMouseopen = () => {
    DrawersetOpen(true);
  }
  const handleDrawerOpen = () => {
    DrawersetOpen(true);
  };
  const handleDrawerClose = () => {
    DrawersetOpen(false);
  };
  const trashHandler = () => {
    setTrashClick(true);
    setArchiveClick(false);
    setGetAll(false);
  };
  const ArchiveHandler = () => {
    setTrashClick(false);
    setArchiveClick(true);
    setGetAll(false);
  };
  const NotesHandler = () => {
    setTrashClick(false);
    setArchiveClick(false);
    setGetAll(true);
  };
  const searchClick = () => {
    setsearchtextField(true)
  }
  return (
    <div className="dashbordcontainer" >
      <div className="{classes.root}">
        <CssBaseline />
        <AppBar position="fixed" color="white" className={clsx(classes.appBar)} >
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} onChange={handleDrawerClose} edge="start"
              className={clsx(classes.menuButton)} ><MenuIcon /> </IconButton>
            <div className="keepimage">
              <img src={keepimg} alt="Keep Logo" />
            </div>
            <div className="keep">
              <Typography className="keep" variant="h6" noWrap>
                Fundoo
            </Typography>
            </div>
            <div className="searchBar" onClick={searchClick}>
              <div>
                <IconButton><SearchIcon /></IconButton>
              </div>
              <div className="inputtextField">
                <TextField placeholder="Search"
                  InputProps={{ disableUnderline: true, }} multiline fullWidth>search</TextField>
              </div>
            </div>
            <div className="icon">
              <IconButton> <RefreshSharpIcon /> </IconButton>
              <IconButton> <ViewStreamSharpIcon /> </IconButton>
            </div>
            <div className="account">
            <Avatar style={{ backgroundColor: randomColor() }}
                                  alt={localStorage.getItem("firstName")} size="small" src="/"  ></Avatar>

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
          <List onMouseEnter={handleDrawerMouseopen} onMouseLeave={handleDrawerMouseClose}>
            <ListItem button key={'Notes'} className="notes" onClick={NotesHandler} alt="Notes">
              <Link to="/dashbord/Notes"> <ListItemIcon  ><EmojiObjectsOutlinedIcon /></ListItemIcon></Link>
              <ListItemText primary={'Notes'} />
            </ListItem>
            <ListItem button key={'Remainders'} className="remainder">
              <ListItemIcon><NotificationsOutlinedIcon /></ListItemIcon>
              <ListItemText primary={'Remainders'} />
            </ListItem>
            <ListItem button key={'Editlabels'} className="editlabels">
              <ListItemIcon>< EditOutlinedIcon /></ListItemIcon>
              <ListItemText primary={'Edit labels'} />
            </ListItem>
            <ListItem button key={'Archive'} className="archive" onClick={ArchiveHandler}>
              <Link to="/dashbord/archive"><ListItemIcon ><ArchiveOutlinedIcon /></ListItemIcon></Link>
              <ListItemText primary={'Archive'} />
            </ListItem>
            <ListItem button className="trash" onClick={trashHandler}>
              <Link to="/dashbord/trash"> <ListItemIcon >< DeleteOutlinedIcon /></ListItemIcon></Link>
              <ListItemText primary={'Trash'} />
            </ListItem>
          </List>
        </Drawer>
      </div>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: Draweropen,
        })} >
        <switch>
          <PrivateRoute path={"/dashbord/Notes"} component={getAllNotes} />
          <PrivateRoute path={"/dashbord/trash"} component={trashNotes} />
          <PrivateRoute path={"/dashbord/archive"} component={archiveNote} />
        </switch>
      </main>
    </div>
  );
}