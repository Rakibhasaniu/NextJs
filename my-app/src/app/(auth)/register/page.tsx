
const Register = () => {
  return (
    <div>
      <h1>
        Register Page
      </h1>
      <p>Please fill in the form below to create a new account.</p>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        </form>
        <button type="submit">Register</button>
    </div>
  );
};

export default Register;