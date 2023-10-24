import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Swal from "sweetalert2";

function CategoryEdit (){

    const URL = "http://localhost:3001/categories";
    const { id } = useParams();
    let [product, setProduct] = useState({});
    let [name ,setName] = useState("");
    let navigate = useNavigate();


    useEffect(() => {
      getCategory();
    }, []);

    function getCategory() {
        axios.get(`${URL}/${id}`)
            .then((res) => {
                if (res.status === 200)
                    return res.data
            }).then((data) => {
                setProduct(data);
                setName(data.name);
            })
    }

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

    let submitEvent = (event) => {
        event.preventDefault();

        let data = {
            "name" : name,
        }

        axios.patch(`${URL}/${product.id}`, data)
            .then((res) => res.status)
            .then((status) => {
                if (status === 200) {
                Toast.fire({
                    icon: "success",
                    title: "The category have been updated successfully",
                });
                navigate(`/category/${id}`);
                } else {
                Toast.fire({
                    icon: "warning",
                    title: "The category have been failed to update",
                });
                navigate(`/category`);
                }
            });

    };

    return (
        <>
        <BreadCrumb sup_name="All categories" name={`category ${product.name}`} onClick={() => { navigate("/category"); }}/>

        <form  onSubmit={submitEvent} autoComplete="off">
            <label htmlFor="name" className="form-label mt-4">Category name</label>
            <div className="row justify-content-center">
                <div className="col-md-8 col-sm-12">
                    <input type="text" className="form-control"  placeholder="enter the category name "
                        value={name} onChange={  (e) => setName(e.target.value) }  />
                </div>
            <div className="col-md-4 col-sm-12">  
                <button type="submit" className="btn btn-primary">save the changes</button>
            </div>
            </div>
        </form>
        </>
    )
}

export default CategoryEdit;