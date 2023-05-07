import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import twitter from "../../assets/img/twitter.svg";

const Login = () => {
  return (
    <form className="form form1">
      <img src={twitter} alt="twitter" className="login_img" />
      <h3 className="login__title">Log in to Twitter</h3>
      <input type="email " className="email__input" placeholder="Email address"/>
      <input type="password" className="password__input" placeholder="Password"/>
      <button type="submit" className="login__btn">Log in</button>
      <span className="forgot__link-wrapper">
        <Link>Forgot password?</Link>
        <Link to='/signup'>Sign up to Twitter</Link>
      </span>
    </form>
  );
};

export default Login;
