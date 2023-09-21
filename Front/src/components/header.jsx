import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/apiCall";
import Logo from "../assets/argentBankLogo.png";
import Rightbracket from "../assets/Rightbracket.png";
import Circleuser from "../assets/Circleuser.png";

const Header = () => {
  const lienActif = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state);
  const { userName } = user;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link
        to="/"
        className={`main-nav-logo ${lienActif.pathname === "/" ? "actif" : ""}`}
      >
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div className="nav-items">
        {!isAuthenticated && (
          <Link
            to="/login"
            className={`main-nav-item ${
              lienActif.pathname === "/login" ? "actif" : ""
            }`}
          >
            <img src={Circleuser} className="circleuser" alt="circleuser" />
            Sign In
          </Link>
        )}

        {isAuthenticated && (
          <Link to="/user" className="main-nav-item">
            <img src={Circleuser} className="circleuser" alt="circleuser" />
            <p>{userName}</p>
          </Link>
        )}

        {isAuthenticated && (
          <div className="main-nav-item" onClick={handleLogout}>
            <img
              src={Rightbracket}
              className="rightbracket"
              alt="rightbracket"
            />
            <a>Sign Out</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
