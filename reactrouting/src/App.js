import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import ContactUs from './ContactUs';
import Registration from './Registration';
import UserContext from './UserContext'; // Import the UserContext
import Home from './Home';

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <div>
            <Link to="/registration">Register</Link>&nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp;
            <Link to="/home">Home</Link>&nbsp;&nbsp;
            <Link to="/contactus">ContactUs</Link>&nbsp;&nbsp;
          </div>
          <br />
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
