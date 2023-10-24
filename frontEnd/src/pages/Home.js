import Product from "./../components/Product";
import { useState, useEffect } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import "./../assets/styles/ProductSection.css";
import { useNavigate } from "react-router-dom";

export default function ProductSection() {
  
  const URL = `http://localhost:3001/products`;
  const [product, setProduct] = useState([]);
  let [paginate, setPaginate] = useState(1);
  let navigate = useNavigate();

  let getAllProduct = (page_num) => {
    fetch(`${URL}?_page=${page_num}&_limit=8`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    getAllProduct(paginate);
  }, [paginate]);

  let productBlock = product.map((product, index) => {
    return (
      <tr key={product.id}>
        <Product product={product} index={index}  RefreshPage= {() => getAllProduct() } />
      </tr>
    );
  });

  let paginatefunc = (signal) => {
    if (paginate <= 1 && signal === 0) return;
    setPaginate((prevPaginate) =>
      signal === 0 ? prevPaginate - 1 : prevPaginate + 1
    );
  };

  function paginateBlock() {
    return (
      <div
        className="btn-toolbar paginate-holder"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-primary btn-pagination" onClick={() => paginatefunc(0)} >
            <span> <FcPrevious /> </span>
            <span> previous </span>
          </button>
          <button type="button" className="btn btn-primary btn-pagination" onClick={() => paginatefunc(1)} >
            <span>next </span>
            <span> <FcNext /> </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="table-responsive">
        <div className="add-product mt-4">
          <button  onClick={ () => navigate("/product/add_product")}>
            Add product <AiOutlinePlus />
          </button>
        </div>
        <table className="table table-striped mt-3 table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">image</th>
              <th scope="col">title</th>
              <th scope="col">price</th>
              <th scope="col">category</th>
              <th scope="col">operation</th>
            </tr>
          </thead>
          <tbody>{productBlock}</tbody>
        </table>
      </div>

      {paginateBlock()}
    </>
  );
}
