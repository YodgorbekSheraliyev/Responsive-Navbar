import { Link } from "react-router-dom";
import { useState } from "react";
import twitter from "../../assets/img/twitter.svg";
import firebase from "../../firebase";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      setError("Ma'lumot kiriting");
    } else {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("Muvaffaqiyatli kirildi");
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          setError("Foydalanuvchi topilmadi");
        } else if (error.code === "auth/wrong-password") {
          setError("Parol noto'g'ri");
        } else {
          setError(error.message);
        }
      }
    }
  };

  const togglePassword = () => {
    setshowPassword(!showPassword);
  };
  return (
    <form className="form form1" onSubmit={handleLogin}>
      <img src={twitter} alt="twitter" className="login_img" />
      <h3 className="login__title">Log in to Twitter</h3>
      <input type="email " className="email__input" placeholder="Email address" 
      value={email}  onChange={(e) => {setEmail(e.target.value)}}/>
      <input
        type={showPassword ? "text" : "password"}
        className="password__input"
        placeholder="Password" value={password}
        onChange={(e) => {setPassword(e.target.value)}}/>
      <button type="submit" className="login__btn">
        Log in
      </button>
      <button type="button" onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"} password
      </button>
      <span className="forgot__link-wrapper">
        <Link>Forgot password?</Link>
        <Link to="/signup">Sign up to Twitter</Link>
      </span>
    </form>
  );
};

export default Login;
