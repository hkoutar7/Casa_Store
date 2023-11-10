import { NavLink } from "react-router-dom";
import "./../assets/styles/NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar border-bottom border-body navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="/#">
          <span>Casa</span>
          <span>Store</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
