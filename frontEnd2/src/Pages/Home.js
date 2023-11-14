import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../tlk/reducer/productSlice';
import SliderAnimated from '../Components/Slider';
import Header from '../Components/Header';

export default function Home() {

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>  
        <SliderAnimated />
        <div className="container mt-5">
        <Header/>
        </div> 
        </>
    );
}
