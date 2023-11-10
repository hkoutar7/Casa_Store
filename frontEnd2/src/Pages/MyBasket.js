import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delateProductFromBasket, getProductFromBasket ,incrementByOne,decremetByOne } from '../tlk/reducer/basketSlice';
import {formatText} from "./../Components/Card";
import {MdExpandMore} from "react-icons/md";
import {RxCross2} from "react-icons/rx";
import Table from "react-bootstrap/Table";
import MyBasketDetails from '../Components/MyBasketDetails';
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";

import "./../assets/styles/myBasket.css";

export default function MyBasket() {

  let dispatch = useDispatch();
  let products = useSelector((state) => state.basket);

  
  const ProductRow = (props) => {

    const { product } = props;
    return (
      <tr>
        <td className="row">
          <div className="col-4">
            <img src={product.image} alt="img not found" />
          </div>
          <div className="col-8">
            <p>{formatText(product.title, "title")}</p>
            <p>All size available</p>
            <p>
              Qty <MdExpandMore />
            </p>
          </div>
        </td>
        <td>{product.price.toFixed(2)} $</td>
        <td>
          <span>{product.quantity}</span>
          <div>
            <BsFillPlusSquareFill onClick={() => dispatch(incrementByOne(product))}/>
            <AiFillMinusSquare onClick={() => dispatch(decremetByOne(product))} />
          </div>
        </td>
        <td>{Number(product.price * product.quantity).toFixed(2)} $</td>
        <td>
          <button onClick={() => deleteProduct(product)}>
            <RxCross2 />
          </button>
        </td>
      </tr>
    );
  };

  const deleteProduct = (product) => {
      dispatch(delateProductFromBasket(product));
  }

  useEffect(() => {
    dispatch(getProductFromBasket());
  }, []);

  return (
    <div id='myBasket' className='container mt-5'>
      <div className='row'>
        <div className='col-9'>
          <p>Shopping Cart <span>{products.length} items</span></p>
          <Table responsive>
            <tbody>
              {
              products.map((product) => (
                  <ProductRow key={product.id} product={product} />
              ))
              }
            </tbody>
          </Table>
        </div>
        <div className='col-3'>
            <MyBasketDetails />
        </div>
      </div>
    </div>
  );
}