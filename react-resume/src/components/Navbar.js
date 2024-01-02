import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useEffect} from 'react'

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate, Link } from 'react-router-dom';
import List from '@mui/material/List';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import navbarStyles from '../styling/navbar.css'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import '../index.css'
import '../App.css'
import Brightness4 from '@mui/icons-material/Brightness4';

//#bdbdbd
function toggleDarkMode() {
    if (window.darkMode == false) {
        window.darkMode = true;
    }
    else {
        window.darkMode = false;
    }
}

export default function Navbar(props) {
    const theme = createTheme({
            components: {
                // Name of the component
                MuiButtonBase: {
                    defaultProps: {
                        // The props to change the default for.
                        disableRipple: true, // No more ripple, on the whole application 💣!
                    },
                }
            },
            typography: {
                allVariants: {
                    color: "DimGrey"
                }
            }
        });

 
    

    



    const mainListItems = (
            <ThemeProvider theme={theme}>
            <React.Fragment>
            <ListItemButton sx={{"&:hover":{backgroundColor:"transparent"}}} onClick={() => {
                    props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
            }}>
                    <ListItemIcon>
                        <SentimentSatisfiedAltOutlinedIcon className="icon" sx={{ color:"DimGrey"}}/>
                    </ListItemIcon>
                <ListItemText primary={<Typography component="span" sx={{"&:hover":{textDecoration:"underline"}, fontFamily:"Open Sans", fontWeight:"bold"}}>
                        <Box className="navbar-text">
                            About Me
                        </Box>
                </Typography>}/>
                </ListItemButton>
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }} onClick={() => {
                    props.experienceRef.current.scrollIntoView({ behavior: "smooth" });
                }}>
                    <ListItemIcon>
                        <WorkOutlineOutlinedIcon className="icon" sx={{ color: "DimGrey" }} />
                    </ListItemIcon>
                    <ListItemText primary={<Typography component="span" sx={{ "&:hover": { textDecoration: "underline" }, fontFamily: "Open Sans", fontWeight: "bold"  }}>
                        <Box className="navbar-text">
                            Experience
                        </Box>
                    </Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }} onClick={() => {
                    props.educationRef.current.scrollIntoView({ behavior: "smooth" });
                }}>
                    <ListItemIcon>
                        <SchoolOutlinedIcon className="icon" sx={{ color: "DimGrey" }} />
                    </ListItemIcon>
                    <ListItemText primary={<Typography component="span" sx={{ "&:hover": { textDecoration: "underline" }, fontFamily: "Open Sans", fontWeight: "bold"  }}>
                        <Box className="navbar-text">
                            Education
                        </Box>
                    </Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }} onClick={() => {
                    props.projectRef.current.scrollIntoView({ behavior: "smooth" });
                }}>
                    <ListItemIcon>
                        <SquareFootOutlinedIcon className="icon" sx={{ color: "DimGrey" }} />
                    </ListItemIcon >
                    <ListItemText primary={<Typography component="span" sx={{ "&:hover": { textDecoration: "underline" }, fontFamily: "Open Sans", fontWeight: "bold"  }}>
                        <Box className="navbar-text" t>
                            Projects
                        </Box>
                    </Typography>} />
                </ListItemButton>
            </React.Fragment>
            </ThemeProvider >
        );

        /*

            <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }} onClick={toggleDarkMode}>
                    <ListItemIcon>
                        <Brightness4 className="icon" sx={{ color: "Black" }} />
                    </ListItemIcon >
                    <ListItemText primary={<Typography component="span" sx={{ "&:hover": { textDecoration: "underline" }, fontFamily: "Open Sans", fontWeight: "bold" }}>
                        <Box className="navbar-text" t>
                            Dark Mode
                        </Box>
                    </Typography>} />
                </ListItemButton>
        */

    return (
        <React.Fragment>
        <CssBaseline />

    <List 
        sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent:"center",
            background: "White",
            boxShadow: 1,
            height: "8vh",
            position:"fixed",
            marginLeft:"5%",
            borderBottomLeftRadius:"15px",
            borderBottomRightRadius:"15px",
            zIndex: 1
        }}
    >
        {mainListItems}
    </List>
    </React.Fragment>

)}