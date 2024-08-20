/* eslint-disable react/no-unescaped-entities */
import "../styles/Register.css";

function Register() {
  return (
    <>
      <div className="loginContainer d-flex flex-column justify-content-center align-content-center flex-wrap flex-grow-1">
        <h4 className="display-4 text-center fw-bold mb-5">Register</h4>
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
            <label htmlFor="exampleInputUserName" className="form-label">
              User name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUserName"
              placeholder="Foulen ben Foulen"
            />
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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="********"
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Create account
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
