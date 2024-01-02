import * as React from 'react';
import { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, setState, forwardRef } from "react";
import Grid from '@mui/material/Grid';
import App, { tablify, parse_bool, theme, get_columns } from "../App";
import Navbar from './Navbar';
import Headshot from './Headshot';
import { styled } from "@mui/material/styles";
import '../index.css'
import '../App.css'
import GitHubIcon from '@mui/icons-material/GitHub';

import { bwb_text } from '../resources/stringConsts.js'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import KeyboardArrowDownIcon from
    "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from
    "@mui/icons-material/KeyboardArrowUp";



import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link, Collapse, Container, CardContent, Card, CardActionArea, CardMedia, IconButton, CardActions } from '@mui/material';
import GitHub from '@mui/icons-material/GitHub';


export default function ProjectCard(props) {




    return (
        <Card sx={{ maxWidth: 345, height:"60vh"}}>
            <CardMedia
                sx={{ height:"30vh", objectFit: "contain"}}
                image={props.projImg}
            />
            <CardContent>
                <Typography gutterBottom sx={{ fontSize: { xs: "15px", md: "30px" }, fontFamily:"Open Sans"}}>
                    {props.projTitle}
                </Typography>
                <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontFamily: "Open Sans" }}>
                    {props.projDescr}
                </Typography>
            </CardContent>
            <CardActions >
                <IconButton sx={{color:"DimGrey"}} disableRipple
                onClick={() => {
                    const newWindow = window.open(props.projLink, '_blank', 'noopener,noreferrer')
                    if (newWindow) newWindow.opener = null
                }}
                ><GitHubIcon></GitHubIcon></IconButton>
            </CardActions>
        </Card>
    );





}

//"#fafafa"