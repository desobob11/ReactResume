import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


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
import ExperienceCard from './ExperienceCard';

import { bwb_text } from '../resources/stringConsts.js'

import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { TableBody, TableHead, TableRow, Box, Divider, Button, Link, Collapse, Container, CardContent } from '@mui/material';

export default function Ellipses() {
    return (
        <Timeline sx={{alignItems:"center", marginTop:"0px", height:"100vh", marginBottom:"0px"}}>
            <TimelineItem sx={{ height: "60%" }}>
                <TimelineSeparator>
                    <TimelineDot  />
                    <TimelineConnector />
                </TimelineSeparator>
            </TimelineItem>
            <TimelineItem sx={{ height: "60%" }}>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
            </TimelineItem>
        </Timeline>
    );
}