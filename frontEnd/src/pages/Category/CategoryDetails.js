import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import BreadCrumb from "../../components/BreadCrumb";
import "./../../assets/styles/Category/CategoryDetails.css"

export default function CategoryDetails (){

    const URL = "http://localhost:3001";
    let [category, setCategory] = useState({});
    let [product, setProduct] = useState([]);
    let navigate = useNavigate();
    let {id} = useParams();

    let getCategory = () => {
        return axios.get(`${URL}/categories/${id}`)
                .then((res) => {
                    if (res.status === 200) return res.data;
                });
    };

    let getProduct = (categoryName) => {
        return axios.get(`${URL}/products?category_like=${categoryName}`)
                .then((res) => {
                    if (res.status === 200) return res.data;
                });
    };

    useEffect(() => {
        getCategory().then((data) => {
            if (data)  setCategory(data);
        });
    }, [id]);

    useEffect(() => {
        if (Object.keys(category).length !== 0) {
            getProduct(category.name).then((productData) => {
                if (productData) {
                    setProduct(productData);
                }
            });
        }
    }, [category]); 
    
    let BlockCard = () => {
        return (
        product.map((prod) => {
            return (
            <Link to={`/product/${prod.id}`} key={prod.id} className="card col-lg-4 col-md-6 col-sm-1" id="product_category">
                <picture className="card-img">
                    <img className="card-img-top" src={prod.image} alt="img not found" />
                </picture>
                <div>
                    <div className="card-body">
                        <h5 className="card-title">
                            { (prod.title.length > 20) ? prod.title.slice(0,20)+"..." : prod.title}
                        </h5>
                        <p className="card-text card-desc">
                            { (prod.description.length > 40) ? prod.description.slice(0,40)+"..."  : prod.description}
                        </p>
                        <p className="card-text card-price">
                            {console.log(prod.price < 100)}
                            <small className={`text-muted ${ prod.price < 100 && "active"  } `}  >{prod.price}$</small>
                        </p>
                    </div>
                </div>
            </Link>
            );
        }));
    }

    return (
    <>
        <BreadCrumb sup_name="All categories" name={`category ${category.name}`} onClick={() => { navigate("/category"); }} />

        <div className="container">
        <div className="row card-container-prod">
            {BlockCard() }
        </div>
        </div>
    </>
    );
}