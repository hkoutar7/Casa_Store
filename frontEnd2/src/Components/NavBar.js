import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import "./../assets/styles/navBar.css"

export default function NavBar() {

    let products = useSelector((state) => state.basket);

    return (
        <nav className="navbar border-bottom border-body navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand logo" href="/#">
                <span>Casa</span>
                <span>Store</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" aria-current="page">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/myBasket" className="nav-link">
                        My Basket - ({products.length})
                    </NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}
