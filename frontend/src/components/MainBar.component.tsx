import React from 'react';
import { getUserName, logout } from '../services/login.service';
import { useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
const MainBarComponent = () => {
  const history = useHistory();

  const logoutAndRedirect = () => {
    logout()
    history.push('/')
  }

  return (
  <AppBar position="static">
    <Toolbar>
      <Box  display="flex" width='100%' justifyContent="flex-end" alignItems="center" >
        <Typography>
          Logged in as: {getUserName()} | 
        </Typography>
        <Button onClick={logoutAndRedirect} color="inherit">Logout</Button>
      </Box>
    </Toolbar>
  </AppBar>)
}

export default MainBarComponent;