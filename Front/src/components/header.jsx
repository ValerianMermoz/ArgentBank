import React from "react";
import Logo from '../assets/argentBankLogo.png';
import { ReactComponent as Circle } from "../assets/circle-user.svg";
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const lienActif = useLocation();
  return (
    <nav className="main-nav">

<Link to="/" className={`main-nav-logo ${lienActif.pathname === '/' ? 'actif' : ''}`}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        {/* <h1 className="sr-only">Argent Bank</h1> */}
      </Link>
      <div>
      <Link to="/login" className={`main-nav-item ${lienActif.pathname === '/login' ? 'actif' : ''}`}>
          <Circle />
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;