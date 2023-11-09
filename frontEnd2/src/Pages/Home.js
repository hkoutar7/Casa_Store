import React, { useEffect } from 'react'
import CardProduct from '../Components/Card';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../tlk/reducer/productSlice';

export default function Home() {

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="container mt-5">
            <div className="row ">
                {
                products.map((product) => (
                    <div className="col-xl-4  col-md-6 col-sm-12" key={product.id}>
                        <CardProduct id= {product.id}
                            title={product.title} price={product.price} 
                            desc = {product.description} img = {product.image} 
                        />
                    </div>
                ))
                }
            </div>
        </div>
    );
}
