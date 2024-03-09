import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import './css/login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
      const navigate = useNavigate();
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      function validate() {
            if (username.trim() === '') {
                  setError('Please insert your username');
                  return false;
            }
            if (password.trim() === '') {
                  setError('Please insert your password');
                  return false;
            }
            return true;
      }

      function handleSubmit() {
            if (validate()) {
                  // Form is valid, navigate to another page
                  navigate('/eventmanagement'); // Replace '/another-page' with the desired URL
            }
      }

      return (
            <div className="container">
                  <div className="login">
                        <div className="card">
                              <div className="logo">
                                    <img src={Logo} alt="" />
                                    <h1>digilabs.</h1>
                              </div>
                              <form action="" className="form">
                                    <p style={{ color: '#58A2FF', fontFamily: "Morandi Regular" }}>Sign In</p>
                                    <div>
                                          <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                          />
                                    </div>
                                    <div className=''>
                                          <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                          />
                                    </div>
                                    {error && <p style={{ color: 'white' }}>{error}</p>}
                                    <div>
                                          <button className='button' type='button' onClick={handleSubmit}>
                                                Sign In
                                          </button>
                                    </div>
                                    <p className="forgot">Forgot Password?</p>
                              </form>
                        </div>
                  </div>
            </div>
      );
}
export default Login;
