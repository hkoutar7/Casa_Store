import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { BsFillPenFill, BsEyeFill, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import "./../../assets/styles/Category/CategorySection.css";

export default function CategorySection() {

  const URL = "http://localhost:3001/categories";
  let [category , setCategory] = useState([]);
  let navigate = useNavigate();
  
  let getAllCategory = () => {
    axios
      .get(URL)
      .then((res) => { if (res.status === 200) return res.data; })
      .then((data) => setCategory(data));
  }

  useEffect (() => {
    getAllCategory();
  }, [category]);


  let deleteCategory = (id, name) => {
    
    Swal.fire({
      icon: "error",
      html: `<h4>Are you sure you want to delete</h4> <span style="color : green" >${name}</span>`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    })
    .then((res) => {
      if (res.isConfirmed) {
        console.log("true");
        axios.delete(`${URL}/${id}`)
        .then((res) => {
          if (res.status === 200)
          Swal.fire("Good job!", `${name} deleted successfully`, "success");
        })
      }
    });
  }


  let categoryBlock = category.map((c, index) => {
    return (
      <tr key={index}>
        <td>{++index}</td>
        <td>{c.name.charAt(0).toUpperCase().concat(c.name.slice(1).toLowerCase())}</td>
        <td className="td-operation">
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
              Operation
            </button>

            <ul className="dropdown-menu">
              <li>
                <BsEyeFill />
                <Link to={`/category/${c.id}`} className="dropdown-item"> View </Link>
              </li>
              <li>
                <BsFillPenFill />
                <Link to={`/category/edit_category/${c.id}`} className="dropdown-item" >
                  Edit
                </Link>
              </li>
              <li>
                <BsFillTrash3Fill />
                <button type="button" onClick={() => deleteCategory(c.id, c.name)} className="dropdown-item" > 
                  delete
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    );
  });
  


  return (
    <>
      <div className="table-responsive">
        <div className="add-category mt-4">
          <button className="mx-auto" onClick={() => navigate("/category/add_category")}>
            Add Category <AiOutlinePlus />
          </button>
        </div>
        <table className="table table-striped mt-3 table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">operation</th>
            </tr>
          </thead>
          <tbody>
            {categoryBlock}
          </tbody>
        </table>
      </div>
    </>
  );
}
