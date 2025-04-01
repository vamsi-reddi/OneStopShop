import React from "react";
import "./CSS/Login.css";

const LoginSignUp = () => {
  
  return (
    <div className="login">
      <div className="login-center">
        <h1>Login</h1>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Continue</button>
        <p>Create an account?<span style={{ color: "#ff4141" }}> Click here</span>
        </p>
        <div className="login-terms">
          <input type="checkBox" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
