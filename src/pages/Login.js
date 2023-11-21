import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleLoginClick = () => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid credentials');
    }
    if (email && password) {
      handleLogin({ email });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Login;
