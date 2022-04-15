import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-Mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login_signInButton">SignIn</button>

          <p>
            By Signing-in you agree to the Amazon fake clone Conditions of Use
            and Sale. Please see out Privacy Notice, Our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="login_registerButton">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
