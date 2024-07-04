import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const LoginAdmin = () => {
    let navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
    navigate('/')
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>ADMIN LOGIN</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}

      <p><Link to="/loginuser"> <h3>User? Login here</h3></Link></p>
    </form>
  );
};

export default LoginAdmin;
