import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";

export default function CategoryAdd() {

  const URL = "http://localhost:3001/categories";
  let navigate = useNavigate();
  let [name ,setName ] = useState("");

  const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

  let addCategory = (data)=> {
      axios.post(`${URL}`, data)
      .then((res) => {
        if (res.status === 201){
            Toast.fire({
              icon: "success",
              title: "A new product have been added",
            });
        }
        else {
            Toast.fire({
              icon: "warning",
              title: "The product have been failed",
            });
        }
      })
      navigate("/category");
  }

  let submitEvent = (event) => {
    event.preventDefault();

    let data = {
      "name" : name,
    }
    addCategory(data);
  }

  return (
    <>
      <BreadCrumb sup_name="All categories" name="add new category" onClick={() => navigate("/category")} />
    
      <form onSubmit={ submitEvent }  autoComplete="off">
        <label htmlFor="name" className="form-label mt-4">Category name</label>
        <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12">
                <input id="name" type="text" className="form-control"  placeholder="enter the category name "
                  onChange={(event) => setName(event.target.value)}
                />
            </div>
          <div className="col-md-4 col-sm-12">  
            <button type="submit" className="btn btn-primary">Add The category</button>
          </div>
        </div>
      </form>
    </>
  );
}
