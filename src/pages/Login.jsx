/* eslint-disable react/no-unescaped-entities */
import "../styles/Login.css";
function Login() {
  return (
    <>
      <div className="loginContainer d-flex flex-column justify-content-center align-content-center flex-wrap flex-grow-1">
        <h4 className="display-4 text-center fw-bold mb-5">Login</h4>
        <form className="loginForm">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
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
              placeholder="********"
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
