import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/login.service';

export default function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function sendLoginRequest(event: any){
    event.preventDefault();
    const isSuccess = await login(email, password);
    if(isSuccess)
      history.push('ehr')
  }

  const theme = createTheme();
  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={{
                      marginTop: theme.spacing(8),
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
            <Avatar style={{
                      margin: theme.spacing(1),
                      backgroundColor: theme.palette.secondary.main,
                    }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form style={{
                          width: '100%',
                          marginTop: theme.spacing(1),
                        }} noValidate onSubmit={sendLoginRequest}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                  margin: theme.spacing(3, 0, 2),
                }}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </ThemeProvider>
    </>
  );
}

