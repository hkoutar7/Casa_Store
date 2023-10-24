import Swal from "sweetalert2";
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

function ProductEdit() {

    const URL = "http://localhost:3001/products";
    let navigate = useNavigate();
    let {id} = useParams();
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [price, setPrice] = useState(0);
    let [category, setCategory] = useState("");
    let [image, setImage] = useState("");
    let [rate, setRate] = useState(0);
    let [count, setCount] = useState(0);
    let [isLoading, setIsLoading] = useState(false); 

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


    useEffect(() => {
        axios.get(`${URL}/${id}`)
            .then((res) => res.data)
            .then((data) => {
                setTitle(data.title);
                setDescription(data.description);
                setPrice(data.price);
                setCategory(data.category);
                setImage(data.image);
                setRate(data.rating["rate"]);
                setCount(data.rating["count"]);
            })
        setIsLoading(true);
    },[]);


    let submitEvent = (event) => {
        event.preventDefault();

        let data = {
            title: title,
            description: description,
            price: Number(price),
            category: "" || category  ,
            image: "" || image ,
            rating: {
                rate: 0 || rate ,
                count: 0 || count,
            },
        };

        axios.put(`${URL}/${id}`,data)
            .then((res) => res.status)
            .then((status) => {
                if (status === 200) {
                    Toast.fire({
                        icon: "success",
                        title: "The product have been updated successfully",
                    });
                    navigate(`/product/${id}`);
                } else {
                    Toast.fire({
                        icon: "warning",
                        title: "The product have been failed to update",
                    });
                    navigate(`/product`);
                }
            })
    }

    if (!isLoading)
        return (<p>Loading ....</p>)


    return (
        <>
            <BreadCrumb sup_name="All Products" name="edit the product" onClick={() => { navigate("/product"); }} />
            
            <form onSubmit={ submitEvent }  autoComplete="off"   >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Product's title</label>
                    <input id="title" type="text" className="form-control"  placeholder="enter the product's title "
                        value={title}  onChange={ (e) => setTitle(e.target.value)  } 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Product's description</label>
                    <textarea id="description" className="form-control" rows="4"
                        value={description} onChange={ (e) => setDescription(e.target.value)  }>  
                    </textarea>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product's price</label>
                    <input id="price" type="text" className="form-control"  placeholder="enter the product's price "
                        value={price} onChange={ (e) => setPrice(e.target.value)  }
                    />
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </>
    );
}

export default ProductEdit;
