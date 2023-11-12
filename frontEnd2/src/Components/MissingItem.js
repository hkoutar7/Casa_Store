import React from "react";
import ItemNotFound from "./../assets/images/itemNotFound.png";
import {useNavigate} from "react-router-dom";

import "./../assets/styles/missingItem.css";

export default function MissingItem() {

    let navigate = useNavigate();

    return (
        <article id="missingItem">
            <img src={ItemNotFound} alt="Img not found" />
            <p>Oops! It seems there are no items in your basket.</p>
            <p>
                Why not explore our products and add something amazing to your basket?
            </p>
            <button onClick={ () => navigate("/") }>Browse Products</button>
        </article>
    );
}
