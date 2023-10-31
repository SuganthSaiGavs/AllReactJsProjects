import React, { useState } from 'react';
import { useContext } from "react"
import UserContext from './UserContext';


function Home() {
    const { userData } = useContext(UserContext);
    
    return (
      <div>
        <b>HOME PAGE</b>
        {userData && (
          <div>
            <p>Email ID: {userData.userId}</p>
            <p>Password: {userData.password}</p>
          </div>
        )}
      </div>
    );
  }

export default Home;