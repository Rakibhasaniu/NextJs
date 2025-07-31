import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>

        Login Page
      </h1>
      <p>Please enter your credentials to log in.</p>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p></p>
        <a href="/forgot">Forgot Password?</a>
    </div>
  );
};

export default Login;