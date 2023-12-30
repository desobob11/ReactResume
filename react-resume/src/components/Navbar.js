import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HouseIcon from '@mui/icons-material/House';

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
                color: "DodgerBlue"
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
                    <SentimentSatisfiedAltOutlinedIcon className="icon" sx={{color:"DodgerBlue"}}/>
                    </ListItemIcon>
                <ListItemText primary={<Typography component="span" sx={{"&:hover":{textDecoration:"underline"}}}>
                        <Box className="navbar-text">
                            About Me
                        </Box>
                </Typography>}/>
                </ListItemButton>
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }} onClick={() => {
                    props.experienceRef.current.scrollIntoView({ behavior: "smooth" });
                }}>
                    <ListItemIcon>
                    <WorkOutlineOutlinedIcon className="icon" sx={{ color: "DodgerBlue" }} />
                    </ListItemIcon>
                    <ListItemText primary={<Typography component="span" sx={{ "&:hover": { textDecoration: "underline" } }}>
                        <Box className="navbar-text">
                            Experience
                        </Box>
                    </Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
                    <ListItemIcon>
                    <SchoolOutlinedIcon className="icon" sx={{ color: "DodgerBlue" }} />
                    </ListItemIcon>
                    <ListItemText primary={<Typography component="span" sx={{ "&:hover": { textDecoration: "underline" } }}>
                        <Box className="navbar-text">
                            Education
                        </Box>
                    </Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
                    <ListItemIcon>
                    <SquareFootOutlinedIcon className="icon" sx={{ color: "DodgerBlue" }} />
                    </ListItemIcon >
                    <ListItemText primary={<Typography component="span" sx={{ "&:hover": { textDecoration: "underline" } }}>
                        <Box className="navbar-text" t>
                            Personal Projects
                        </Box>
                    </Typography>} />
                </ListItemButton>
            </React.Fragment>
            </ThemeProvider >
        );

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
            borderBottomRightRadius:"15px"
        }}
    >
        {mainListItems}
    </List>
    </React.Fragment>

)}