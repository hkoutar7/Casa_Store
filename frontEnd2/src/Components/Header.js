import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../tlk/reducer/categorySlice';
import CarouselI from './Carousel';

import "./../assets/styles/categoryTop.css";

export default function Header() {
    const categories = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const [productBasedCategory, setProductBasedCategory] = useState([]);
    const [categoryOrigin, setCategoryOrigin] = useState("");

    useEffect(() => {
    dispatch(fetchCategories());
    }, [dispatch]);

    useEffect (() => {
        axios.get("http://localhost:3001/products")
            .then((res) => res.data)
            .then((data) => setProductBasedCategory(data))
    }, []);

    useEffect(() => {
    if (categoryOrigin) {
        axios
        .get(categoryOrigin)
        .then((res) => res.data)
        .then((data) => setProductBasedCategory(data));
    }
    }, [categoryOrigin]);

    const handleClick = (categoryName) => {

        let newCategoryOrigin = "";
        switch (categoryName) {
            case "All":
            newCategoryOrigin = "http://localhost:3001/products";
            break;
            case "men's clothing":
            newCategoryOrigin =
                "http://localhost:3001/products?category=" +
                encodeURIComponent("men's clothing");
            break;
            case "women's clothing":
            newCategoryOrigin =
                "http://localhost:3001/products?category=" +
                encodeURIComponent("women's clothing");
            break;
            case "jewelery":
            newCategoryOrigin = "http://localhost:3001/products?category=jewelery";
            break;
            case "electronics":
            newCategoryOrigin = "http://localhost:3001/products?category=electronics";
            break;
            default:
            break;
        }
        setCategoryOrigin(newCategoryOrigin);
    };
    
    return (
        <>
            <div id="categoryTop">
                <h4>Explore Popular Categories</h4>
                <p>view our latest collections of fashion , buy from us dude</p>
                <div className="category-container">
                    <p onClick={() => handleClick("All")}  className="category-item">All</p>
                    {
                        categories.map(({ id, name, image }) => (
                        <p onClick={() => handleClick(name)} key={id} className="category-item" >
                            {name}
                        </p>
                        ))
                    }
                </div>
            </div>
            <div id='productByCategory'>
                <CarouselI products={productBasedCategory} />
            </div>
        </>
    );
}
