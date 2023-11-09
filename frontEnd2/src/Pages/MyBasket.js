import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProductsFromBasket, delateProductFromBasket, getProductFromBasket } from '../tlk/reducer/basketSlice';
import Table from "react-bootstrap/Table";


export default function MyBasket() {

  let dispatch = useDispatch();
  let products = useSelector((state) => state.basket);

  
  const ProductRow = (props) => {

    const { product } = props;
    return (
      <tr>
        <td>
          <img src={product.image} alt="img not found" style={{width : "100px"}} />
          <p>{product.title}</p>
        </td>
        <td>{product.price} $</td>
        <td>{product.quantity}</td>
        <td>{ product.price * product.quantity } $</td>
        <td><button className='btn btn-danger'  onClick={() => deleteProduct(product) }>delete</button></td>
      </tr>
    );
  };

  let totalPrice = products.reduce ((totalAmount, currentAmount) => {
    return totalAmount += currentAmount.price * currentAmount.quantity;
  }, 0);

  const deleteProduct = (product) => {
      dispatch(delateProductFromBasket(product));
  }

  useEffect(() => {
    dispatch(getProductFromBasket());
  }, []);

  return (
    <div className='container mt-5'>
      <h3>Cart</h3>
      <button className='btn btn-danger' onClick={ () => dispatch(clearProductsFromBasket())}>clear my basket</button>
      <p> The total price is : <span>{ totalPrice.toFixed(2) } $</span></p>
      <Table responsive>
        <thead>
          <tr>
            <th>Cart Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}
