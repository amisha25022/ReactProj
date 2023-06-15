import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home as HomeIcon, People as PeopleIcon, Info as InfoIcon } from '@material-ui/icons';
import './App.css'; // Import the CSS file for styling
import logo from './assets/logo.png'; // Import the logo image

import Introduction from './Introduction';
import Team from './Team';
import About from './About';
import { Provider } from 'react-redux';
import store from './store';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { label: 'Home', icon: <HomeIcon />, to: '/' },
    { label: 'Team', icon: <PeopleIcon />, to: '/team' },
    { label: 'About', icon: <InfoIcon />, to: '/about' },
  ];

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={toggleSidebar} style={{ color: 'white' }}>Open Sidebar</Button>
            <div style={{ flexGrow: 1 }}/>
            <img src={logo} alt="Logo" className="logo" /> 
          </Toolbar>
        </AppBar>
        <Drawer open={isSidebarOpen} onClose={toggleSidebar}>
          <List>
            {sidebarItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.to}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
