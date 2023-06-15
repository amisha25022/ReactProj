import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Container,
  Box,
  AppBar,
  Toolbar,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import {
  setUsername,
  setPassword,
  setResponseData,
  submitForm,
} from './store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  image: {
    width: '100%',
    maxWidth: 600,
    marginTop: theme.spacing(4),
  },
}));

const Introduction = () => {
  const classes = useStyles();
  const username = useSelector((state) => state.username);
  const password = useSelector((state) => state.password);
  const responseData = useSelector((state) => state.responseData);
  const dispatch = useDispatch();

  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* ...existing code */}
        </Toolbar>
      </AppBar>
      <Container>
        <Box className={classes.content}>
          <Typography variant="h2" style={{ marginBottom: '2rem', textAlign: 'center' }}>Introduction</Typography>
          <Typography variant="h5">
            Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms, and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions.
          </Typography>
          <img className={classes.image} src="https://www.arthmate.com/storage/homecontent/2023-01-06-63b80ebec878f.png" alt="Introduction Image" />

          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
          {responseData && (
            <Typography variant="body1" style={{ marginTop: '1rem' }}>
              Response Data: {responseData}
            </Typography>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Introduction;
