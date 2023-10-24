import Product from "./Product";
import { useState, useEffect } from "react";
import "./../assets/styles/ProductSection.css";

export default function ProductSection() {
  const URL = `http://localhost:3001/products`;
  const [product, setProduct] = useState([]);
  let [paginate, setPaginate] = useState(1);

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
        <Product product={product} index={index} />
      </tr>
    );
  });

  let paginatefunc = (signal) => {
    if (paginate <= 1 && signal === 0) return;
    if (paginate > 3 && signal === 1) return;
    setPaginate((prevPaginate) =>
      signal === 0 ? prevPaginate - 1 : prevPaginate + 1
    );
    getAllProduct(paginate);
    getAllProduct("lol");
  };

  function paginateBlock() {
    return (
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => paginatefunc(0)}
          >
            previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => paginatefunc(1)}
          >
            next
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped mt-5 table-responsive-sm">
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
