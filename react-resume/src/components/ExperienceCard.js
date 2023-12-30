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


import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link, Collapse, Container, CardContent, Card, CardActionArea, CardMedia} from '@mui/material';


export default function ExperienceCard(props) {

    return (
        <Card sx={{marginLeft:"190px", marginTop:"30px", backgroundColor:"Ivory", width:"900px", height:"100px"}}>
            <CardActionArea sx={{width:"100%", height:"100%", display:'flex', justifyContent:"space-between"}}>
                <CardMedia
                component="img"
                image={props.image}
                sx={{justifySelf:"left", height:"100px", width:"200px", objectFit:"contain", marginLeft:"10px"}}
                ></CardMedia>
                <CardContent>
                <Typography sx={{fontFamily:"Open Sans", fontSize:"20px", fontWeight:"bold"}}>
                    {props.jobDescr}
                </Typography>
                <Typography sx={{ fontFamily: "Open Sans", fontSize: "15px"}}>
                    {props.jobTime}
                </Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    );





}

