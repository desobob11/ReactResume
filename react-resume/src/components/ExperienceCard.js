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

import {bwb_text} from '../resources/stringConsts.js'

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
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link, Collapse, Container, CardContent, Card, CardActionArea, CardMedia, IconButton} from '@mui/material';


export default function ExperienceCard(props) {





    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box>
        <Card onClick={() => setIsOpen(!isOpen)} sx={{marginLeft:"11vw", marginTop:"30px", backgroundColor:"Ivory", width:"60vw", height:"10vh"}}>
            <CardActionArea disableRipple sx={{width:"100%", height:"100%", display:'flex', justifyContent:"space-between"}}>
                
                <CardMedia
                component="img"
                image={props.image}
                sx={{justifySelf:"left", height:"100px", width:"200px", objectFit:"contain", marginLeft:"10px"}}
                ></CardMedia>
                <CardContent sx={{marginLeft:"auto"}}>
                <Typography align="right" sx={{fontFamily:"Open Sans", fontSize:"20px", fontWeight:"bold"}}>
                    {props.jobDescr}
                </Typography>
                        <Typography align="right" sx={{ fontFamily: "Open Sans", fontSize: "15px", alight:"right"}}>
                    {props.jobTime}
                </Typography>
                
                </CardContent>
                <IconButton disableRipple
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="expand"
                    size="large"
                    sx={{ "&:hover": { backgroundColor: "transparent" }}}
                >
                    {isOpen ? <KeyboardArrowUpIcon />
                        : <KeyboardArrowDownIcon />}
                </IconButton>          
            </CardActionArea>

        </Card>
        <Box sx={{backgroundColor:"#fafafa", marginLeft:"11vw", borderRadius:"5px", width:"60vw", boxShadow:1}}>
            <Collapse in={isOpen} timeout="auto"
                unmountOnExit>
                <CardContent>
                    <Container sx={{
                        height: 100,
                        lineHeight: 2,
                        fontFamily:"Open Sans",
                        fontSize:"15px"
                    }}>
                        {props.jobText}
                    </Container>
                </CardContent>
            </Collapse>
            </Box> 
        </Box >
    );





}

