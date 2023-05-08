import { useState } from "react";
import twitter from "../../assets/img/twitter.svg";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState('');
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password && !birth) {
      setError("Iltimos barchasini to'ldiring");
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
    }
    setEmail("");
    setPassword("");
    setBirth('');
  };
  return (
    <div className="form__wrapper">
      <form className="signup__form form" onSubmit={handleSubmit}>
        <img src={twitter} alt="Twitter" className="signup__img login__img" />
        <h3 className="signup__title login__title ">Create an account</h3>
        <input type="email " placeholder="Email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="button" className="change__to-email">
          Use email
        </button>
        <h4 className="signup__birth">Date of birth</h4>
        <input type="date" placeholder="Date of birth" value={birth} onChange={(e)=>{setBirth(e.target.value)}}/>
        <p className="signup__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nobis vero voluptate ipsa sint pariatur magni adipisci, earum neque
          dolor, nostrum, at labore eaque reprehenderit? Harum asperiores eius
          fugit incidunt.
        </p>
        <button type="submit" className="signup__btn login__btn">
          Next
        </button>
        <span className="forgot__link-wrapper">
          <Link to="/login">Log in </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
