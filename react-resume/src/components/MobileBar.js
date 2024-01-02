import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react'

import { Typography, BottomNavigation, BottomNavigationAction} from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate, Link } from 'react-router-dom';
import List from '@mui/material/List';
import { createTheme, makeStyles, ThemeProvider} from '@mui/material/styles';
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

export default function MobileBar(props) {
    return (
        <BottomNavigation sx={{
            width:"100vw",
            position:"fixed",
            zIndex:1,
            bottom:"0%",
            backgroundColor:"LightGrey",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px"
        }}
            showLabels

        >
            <BottomNavigationAction label="Amout Me" icon={<SentimentSatisfiedAltOutlinedIcon />} onClick={() => {
                props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
            }} />
            <BottomNavigationAction label="Experience" icon={<WorkOutlineOutlinedIcon />} onClick={() => {
                props.experienceRef.current.scrollIntoView({ behavior: "smooth" });
            }} />
            <BottomNavigationAction label="Education" icon={<SchoolOutlinedIcon />} onClick={() => {
                props.educationRef.current.scrollIntoView({ behavior: "smooth" });
            }} />
            <BottomNavigationAction label="Projects" icon={<SquareFootOutlinedIcon />} onClick={() => {
                props.experienceRef.current.scrollIntoView({ behavior: "smooth" });
            }} />
        </BottomNavigation>
    );
}