import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import "./../assets/styles/navBar.css"

export default function NavBar() {

    let products = useSelector((state) => state.basket);

    let navBar = [
        {
            "name" : 'new',
            "link" : "/",
        },
        {
            "name" : 'Men',
            "link" : "/men",
        },
        {
            "name" : 'Women',
            "link" : "/women",
        },
        {
            "name" : 'other',
            "link" : "/other",
        },
    ]


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
                    {
                    navBar.map(({name, link}, index) => (
                        <li key={index} className="nav-item">
                            <NavLink to={link} className="nav-link">
                                {name}
                            </NavLink>
                        </li>
                    ))
                    }
                </ul>
                <div>
                    <NavLink to="/myBasket" className="nav-link">
                        <img src={require("./../assets/images/shoppingcart.png")} alt="img not found" />
                        <div>
                            <span>My Cart</span>
                            <span style={{ color : `${ products.length === 0 ? "red" : "#757575" }` }}>{products.length} items</span>
                        </div>
                    </NavLink>
                    <button type="btn">SignUp</button>
                    <button type="btn">Login</button>
                </div>
            </div>
            </div>
        </nav>
    );
}