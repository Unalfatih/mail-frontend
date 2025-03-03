import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Ana Sayfa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Giriş Yap</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Kayıt Ol</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
