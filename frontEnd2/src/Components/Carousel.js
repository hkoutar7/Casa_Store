import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { formatText } from "./Card";
import { addProductToBasket } from "../tlk/reducer/basketSlice";

import "react-multi-carousel/lib/styles.css";
import "./../assets/styles/productCarousel.css";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ProductCarousel = ({ products }) => {

    let dispatch = useDispatch();

    let generateStar = (numberStar) => {
        return (
        <>
            {Array.from({ length: numberStar }, (_, index) => (
                <AiFillStar key={index} />
            ))}
        </>
        );
    }

    
    return (
        <Carousel  responsive={responsive}>
            {products.map((product) => (
                <div id="productCarousel" key={product.id}>
                    <div className="row">
                        <div className="col-6">
                            <AiOutlineHeart />
                        </div>
                        <div className={`col-6 ${ product.price < 100 ? "active" : "" } `}>
                            {product.price} $
                        </div>
                    </div>
                    <picture>
                        <img src={product.image} alt="imag not found" />
                    </picture>
                    <div className="productCarouselDescription">
                        <p>{formatText(product.title, "title")}</p>
                        <p> {formatText(product.description, "description")} </p>
                        <div> { generateStar(Math.round(product.rating.rate)) } </div>
                        <button onClick={() => dispatch(addProductToBasket(product))} variant="primary">
                            <BsFillCartPlusFill />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default ProductCarousel;
