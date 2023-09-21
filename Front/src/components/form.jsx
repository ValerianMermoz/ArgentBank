import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCall";
import { getProfile } from "../redux/apiCall";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      console.error("Erreur interne");
      return;
    }

    const handleRememberMe = (rememberMe, username, password) => {
      if (rememberMe) {
        Cookies.set(
          "rememberMe",
          JSON.stringify({ username, password }, { expires: 7 }),
          {
            secure: true, // securise les cookies
            sameSite: "strict", //cookies uniquement sur ce site
          }
        );
      } else {
        Cookies.remove("rememberMe");
      }
    };

    handleRememberMe(rememberMe, username, password);

    dispatch(login(username, password));
  };

  useEffect(() => {
    const rememberMeCookie = Cookies.get("rememberMe");
    if (rememberMeCookie) {
      setRememberMe(!rememberMe);
      const { username, password } = JSON.parse(rememberMeCookie);
      setUsername(username);
      setPassword(password);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated === true && window.location.pathname !== "/user") {
      dispatch(getProfile());
      navigate("/user");
    }
  }, [isAuthenticated, dispatch, navigate]);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="true"
            value={password}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default Form;
