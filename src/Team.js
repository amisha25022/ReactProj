import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, AppBar, Toolbar, TextField, Button } from '@material-ui/core';


const useStylesss = makeStyles((theme) => ({
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
  teamMember: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
    width: 300,
    textAlign: 'center',
  },
}));

const Team = () => {
  const classes = useStylesss();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
      </AppBar>
      <Container>
        <Box className={classes.content}>
          <Typography variant="h2">Our Team</Typography>
          <Typography variant="body1">
            Meet the dedicated team behind Arthmate, working tirelessly to provide innovative fintech solutions to our customers.
          </Typography>
          <Box className={classes.teamMember}>
            <Typography variant="h5">Ranjan Kant</Typography>
            <Typography variant="subtitle1">CEO</Typography>
          </Box>
          <Box className={classes.teamMember}>
            <Typography variant="h5">Kaustubh DasGupta</Typography>
            <Typography variant="subtitle1">CTO</Typography>
          </Box>
          <Box className={classes.teamMember}>
            <Typography variant="h5">Balijeet Kaur</Typography>
            <Typography variant="subtitle1">CFO</Typography>
          </Box>
        </Box>
      </Container>
      <footer className={classes.footer}>
        <Typography variant="body2">© {new Date().getFullYear()} Arthmate. All rights reserved.</Typography>
      </footer>
    </div>
  );
};

export default Team;