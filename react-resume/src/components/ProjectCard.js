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


export default function ProjectCard(props) {




    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom sx={{ fontSize: { xs: "15px", md: "30px" }, fontFamily:"Open Sans"}}>
                    Lizard
                </Typography>
                <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontFamily: "Open Sans" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <GitHubIcon sx={{color:"DimGrey"}} fontSize="large">Share</GitHubIcon>
            </CardActions>
        </Card>
    );





}

//"#fafafa"