import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delateProductFromBasket, getProductFromBasket, incrementByOne, decremetByOne, clearProductsFromBasket } from "../tlk/reducer/basketSlice";
import { formatText } from "./../Components/Card";
import { MdExpandMore } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Table from "react-bootstrap/Table";
import MyBasketDetails from "../Components/MyBasketDetails";
import MissingItem from "../Components/MissingItem";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import "./../assets/styles/myBasket.css";

export default function MyBasket() {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.basket);

  const ProductRow = (props) => {
    const { product } = props;
    return (
      <tr>
        <td className="row">
          <div className="col-sm-12 col-md-4">
            <img src={product.image} alt="img not found" />
          </div>
          <div className="col-sm-12 col-md-8">
            <p>{formatText(product.title, "title")}</p>
            <p>All size available</p>
            <p>
              Qty <MdExpandMore />
            </p>
          </div>
        </td>
        <td>{product.price.toFixed(2)} $</td>
        <td>
          <AiFillMinusCircle onClick={() => dispatch(decremetByOne(product))} />
          <span>{product.quantity}</span>
          <AiFillPlusCircle onClick={() => dispatch(incrementByOne(product))} />
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
  };

  useEffect(() => {
    dispatch(getProductFromBasket());
  }, []);

  return (
    <div id="myBasket" className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <p className="titleCart">
            Shopping Cart <span>{products.length} items</span>
          </p>
          {console.log(products)}
          {products.length > 0 ? (
            <>
              <p
                className="removeAll"
                onClick={() => dispatch(clearProductsFromBasket())}
              >
                remove all
              </p>
              <Table responsive>
                <tbody>
                  {products.map((product, index) => (
                    <ProductRow key={product.id || index} product={product} />
                  ))}
                </tbody>
              </Table>
            </>
          ) : (
            <MissingItem />
          )}
        </div>
        <div className="col-sm-12 col-md-3">
          <MyBasketDetails />
        </div>
      </div>
    </div>
  );
}
