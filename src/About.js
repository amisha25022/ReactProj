import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, AppBar, Toolbar, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100%',
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
      </AppBar>
      <Container>
        <Box className={classes.content}>
          <Typography variant="h2">About US</Typography>
          <Typography variant="h5">
          Arthmate is a B2B fintech that provides solutions for credit risk, technology and data sciences. Arthmate services its embedded fintech platform through its in-house NBFC and co-lending partners. It is also building India’s premier P2P platform that will provide HNIs with the choice to invest in a basket of diversified risk pools already underwritten by India’s meta risk engine.
          </Typography>
        </Box>
      </Container>
      <footer className={classes.footer}>
        <Typography variant="body2">© {new Date().getFullYear()} Arthmate. All rights reserved.</Typography>
      </footer>
    </div>
  );
};

export default About;