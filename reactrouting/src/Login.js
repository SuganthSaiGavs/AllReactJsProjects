import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook instead of useHistory
import UserContext from './UserContext';

function Login() {
  const [loginData, setLoginData] = useState({ userId: '', password: '' });
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate(); // Get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    const storedData = JSON.parse(sessionStorage.getItem('registrationData') || '[]');
    const emailIds = storedData.map(item => item.emailId);
  
    if (emailIds.includes(loginData.userId)) {
      alert('Login successful');
      setUserData(loginData);  // Save login data to context
      navigate('/home'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        Email ID: <input type="email" name="userId" value={loginData.userId} onChange={handleChange} /><br />
        Password: <input type="password" name="password" value={loginData.password} onChange={handleChange} /><br />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default Login;
