import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb";
import "./../assets/styles/Product/addProduct.css";
import Swal from "sweetalert2";


export default function ProductAdd(){

    const URL = "http://localhost:3001/products";
    let navigate = useNavigate();
    let [title , setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [price, setPrice] = useState(0);

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
            title: title,
            description: description,
            price: Number(price),
            category: "",
            image: "" ||  "https://shop.mevid.hu/wp-content/uploads/2019/11/image.jpg",
            rating: {
                rate: 0,
                count: 0,
            },
        };

        axios.post(`${URL}/`, data)
            .then((res) => {
                navigate("/product");
                if (res.status === 201){
                    Toast.fire({
                        icon: "success",
                        title: "A new product have been added",
                    });
                }
                
                else{
                    Toast.fire({
                        icon: "warning",
                        title: "The product have been failed",
                    });
                }
        });
    }

    
    
    return (
        <>
            <BreadCrumb sup_name="All Products" name="add new product" onClick={() => { navigate("/product"); }} />

            <form onSubmit={ submitEvent }  autoComplete="off"   >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Product's title</label>
                    <input id="title" type="text" className="form-control"  placeholder="enter the product's title "
                        onChange={ (e) => setTitle(e.target.value)  }
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Product's description</label>
                    <textarea id="description" className="form-control" rows="2"
                        onChange={ (e) => setDescription(e.target.value)  }
                    ></textarea>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product's price</label>
                    <input id="price" type="text" className="form-control"  placeholder="enter the product's price "
                        onChange={ (e) => setPrice(e.target.value)  }
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add The product</button>
            </form>
        </>
    );
} 

