import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home as HomeIcon, People as PeopleIcon, Info as InfoIcon } from '@material-ui/icons';
import './App.css'; // Import the CSS file for styling
import logo from './assets/logo.png'; // Import the logo image
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, AppBar, Toolbar, TextField, Button } from '@material-ui/core';

const useStyless = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    alignItems: 'center',
  },
  content: {
    content: {
      marginTop: 10,
      flexGrow: 1,
      padding: theme.spacing(9),
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '100%',
      height: '100%',
    },
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  image: {
    width: 840,
    height: 202,
    objectFit: 'cover',
    marginTop: theme.spacing(2),
  },
}));
const Introduction = () => {
    const classes = useStyless();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <Typography variant="h6">Welcome To Arthmate</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Box className={classes.content}>
            <Typography variant="h2" style={{ marginTop: '2rem',marginBottom: '2rem',textAlign: 'center' }}>Introduction</Typography>
            <Typography variant="h5">
              Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms, and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions.
            </Typography>
            <img className={classes.image} src="https://www.arthmate.com/storage/homecontent/2023-01-06-63b80ebec878f.png" alt="Introduction Image" />
          </Box>
        </Container>
        <footer className={classes.footer}>
          <Typography variant="body2">© {new Date().getFullYear()} Arthmate. All rights reserved.</Typography>
        </footer>
      </div>
    );
  };

  export default Introduction;