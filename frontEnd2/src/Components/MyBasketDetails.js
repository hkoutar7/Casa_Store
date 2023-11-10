import React from 'react'
import { useSelector } from 'react-redux';

export default function MyBasketDetails() {

    let products = useSelector((state) => state.basket);

    let totalCart = products.reduce((total, current) => {
        return (total += current.price * current.quantity);
    },0);

    return (
        <>
            <div>
                <p> Jesika Sebastian </p>
                <address>Ohayo 30 <br/> 12300 Vielnna <br /> USA </address>
            </div>

            <div>
                <p>payment method</p> 
                <p>credit card</p> 
                <p>**** **** **** 4860</p> 
            </div>

            <div>
                <p>Do you'va any discount code ?</p>
                <p>only one discount code per order can be applied</p>
                <div className='row'>
                <div className='col-9'>
                    <input type='text' placeholder='Your code here' />
                </div>
                <div className='col-3'>
                    <button type='button' >apply</button>
                </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-6'>
                <p>Subtotal (3 items)</p>
                <p>Shipping costs</p>
                </div>
                <div className='col-6'>
                <p> {totalCart.toFixed(2)} $ </p>
                <p> FREE </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-6'>
                    <p>Total (inc TVA)</p>
                    <p>{totalCart.toFixed(2)} $</p>
                </div>
                <div className='col-6'>
                    <button type='button'>Pay</button>
                </div>
            </div>
        </>
    );
}
