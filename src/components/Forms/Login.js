import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import loginImage from '../images/login.png';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const isMobile = true; // or false, depending on your logic


  const handleUsernameChange = (e) => {
    const value = e.target.value.trim();
    setUsername(value);
    setUsernameError('');
    

    if (value.length < 1) {
      setUsernameError('*This field is required');
    } else if (value.length < 3) {
      setUsernameError('*Enter a valid username (at least 3 characters)');
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      setUsernameError('*Invalid username');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError('');

    if (value.length < 1) {
      setPasswordError('*This field is required');
    } else if (!/^.{4,}$/.test(value)) {
      setPasswordError('*Enter a valid password (at least 4 characters)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    
    if (username.length < 1) {
      setUsernameError('*This field is required');
      hasErrors = true;
    } else if (username.length < 3) {
      setUsernameError('*Enter a valid username (at least 3 characters)');
      hasErrors = true;
    } else if (!/^[A-Za-z\s]+$/.test(username)) {
      setUsernameError('*Invalid username');
      hasErrors = true;
    } else {
      setUsernameError('');
    }
  
    if (password.length < 1) {
      setPasswordError('*This field is required');
      hasErrors = true;
    } else if (password.length < 4) {
      setPasswordError('*Enter a valid password (at least 4 characters)');
      hasErrors = true;
    } else {
      setPasswordError('');
    }
  
    if (!hasErrors && username === 'manogar' && password === 'kavi') {
      // Perform login logic here (e.g., set auth state, store token, etc.)
      console.log('Login successful');
      sessionStorage.setItem('authenticated', 'true');
  
      // Redirect to AddTask component
      navigate('/AddCourse');
    }
  };
  

  return (
   
      <div className="container" style={{display:'flex',alignItems:"center",height:'100vh'}}>
        <div className="row">
          <div className="col-md-6">
            <div className="login-image-container">
            <img src="https://img.freepik.com/free-vector/students-with-laptops-studying-huge-laptop-with-graduation-cap-free-online-courses-online-certificate-courses-online-business-school-concept_335657-792.jpg?size=626&ext=jpg&ga=GA1.2.1869595484.1684142583&semt=ais" alt="Your Image"   style={{ width: isMobile ? '100%' : 'auto', marginTop: isMobile ? '40px' : '100px' }}  />
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: "50px" }}>
            <div className="vector" style={{borderRadius:"20px"}}>
              <div className="container-fluid">
                <div className="row" >
                  <div className="col-md-12" >
                    <a href='http://localhost:3000/' style={{ textDecoration: "none",textAlign:"center" }}>  <p className="oc">HOME / LOGIN</p> </a>
                    <h2 className="oc" style={{textAlign:"center"}} >LOGIN FORM</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={1}>
                    <AccountCircle />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      id="username"
                      label="Username"
                      value={username}
                      onChange={handleUsernameChange}
                      onBlur={handleUsernameChange}
                      error={Boolean(usernameError)}
                      helperText={usernameError}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Lock />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      onBlur={handlePasswordChange}
                      error={Boolean(passwordError)}
                      helperText={passwordError}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" style={{float:"right"}} >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
