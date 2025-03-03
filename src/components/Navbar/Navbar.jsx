import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MailFlow</div>
      <div className="navButtons">
        <Link to="/login" className="button">Giriş Yap</Link>
        <Link to="/register" className="button primary">Kayıt Ol</Link>
      </div>
    </nav>
  );
};

export default Navbar;
