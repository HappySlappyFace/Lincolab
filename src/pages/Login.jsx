/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axiosInstance from "../utils/AxiosInstance";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      // Assuming the response contains a token
      const { token } = response.data;

      // Store the token securely
      localStorage.setItem("token", token); // Replace this with HttpOnly cookie approach if using that

      console.log("Login successful", response.data);
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="loginContainer d-flex flex-column justify-content-center align-content-center flex-wrap flex-grow-1">
        <h4 className="display-4 text-center fw-bold mb-5">Login</h4>
        <form className="loginForm" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Foulenbenfoulen@gmail.com"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
