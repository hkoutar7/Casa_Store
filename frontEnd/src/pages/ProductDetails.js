import ProductDetail from "../components/ProductDetail";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../assets/styles/ProductDetails.css";
import BreadCrumb from "../components/BreadCrumb";

function ProductDetails() {
  let [product, setProduct] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  const URL = "http://localhost:3001/products";

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }

  return (
    <>
      <BreadCrumb sup_name="All Products" name={`product ${product.title}`} onClick={() => { navigate(-1); }} />

      <ProductDetail product={product} />
    </>
  );
}

export default ProductDetails;
