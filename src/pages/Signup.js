import React, { useState } from 'react';

const Signup = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignupClick = ({email, password}) => {
    
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert('Email already registered');
    } else {
      // Add the new user to the list
      const newUser = { email, password };
      setUsers([...users, newUser]);
      setLoggedInUser(newUser);
    }
  };
  

  return (
    <div>
      <h2>Signup</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleSignupClick}>Signup</button>
    </div>
  );
};

export default Signup;
