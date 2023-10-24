import Swal from "sweetalert2";
import { BsFillPenFill, BsEyeFill, BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Product(props) {
  let { product, index, RefreshPage, paginate } = props;
  const URL = "http://localhost:3001/products";

  let ProductCategory = (category) => {
    if (category === "men's clothing")
      return <span className="badge text-bg-blue">Men Clothes</span>;
    else if (category === "jewelery")
      return <span className="badge text-bg-purple">Jewelery</span>;
    else if (category === "electronics")
      return  <span className="badge text-bg-yellow">Electronics</span>;
    else if (category === "women's clothing")
      return <span className="badge text-bg-rose">Women Clothes</span>;
    else return <span className="badge text-bg-secondary">Others</span>;
  };

  let deleteProduct = (pid, title) => {
    Swal.fire({
      icon: "error",
      html: `<h4>Are you sure you want to delete</h4> <span style="color : green" >${String(
        title
      ).substring(0, 20)}... </span>`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`${URL}/${pid}`, {
          method: "DELETE",
        })
          .then((res) => {
            res.json();
          })
          .then((data) => {
            RefreshPage();
            Swal.fire({
              icon: "success",
              html: `<h4>The Product Have been deleted Successfully </h4>`,
              timer: 1500,
            });
          });
      }
    });
  };

  return (
    <>
      <th scope="row">{++index}</th>

      <td className="td-img">
        <img src={product.image} alt={product.title} />
      </td>

      <td className="td-title">
        {product.title.length > 20
          ? `${product.title.substring(0, 20)}...`
          : product.title}
        <span> {product.title} </span>
      </td>

      <td>{product.price}</td>

      <td>{ProductCategory(product.category)}</td>

      <td className="td-operation">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Operation
          </button>
          <ul className="dropdown-menu">
            <li>
              <BsEyeFill />
              <Link to={`/product/${product.id}`} className="dropdown-item">
                View
              </Link>
            </li>
            <li>
              <BsFillPenFill />
              <Link to={`/product/edit_product/${product.id}`} className="dropdown-item">
                Edit
              </Link>
            </li>
            <li>
              <BsFillTrash3Fill />
              <button
                type="button"
                onClick={() => deleteProduct(product.id, product.title)}
                className="dropdown-item"
              >
                delete
              </button>
            </li>
          </ul>
        </div>
      </td>
    </>
  );
}
