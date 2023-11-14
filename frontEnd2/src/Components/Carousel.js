import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { formatText } from "./Card";
import { addProductToBasket } from "../tlk/reducer/basketSlice";

import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ProductCarousel = ({ products }) => {

    let dispatch = useDispatch();
    
    return (
        <Carousel responsive={responsive}>
            {products.map((product) => (
                <Card key={product.id} className="text-center" style={{ height: "370px" }}>
                    <Card.Header>{formatText(product.title, "title")}</Card.Header>
                    <Card.Body>
                        <img src={product.image} alt="img isn't found" style={{ width: '50px' }} />
                        <Card.Text>{formatText(product.description, "description")}</Card.Text>
                        <Button onClick={() => dispatch(addProductToBasket(product))} variant="primary">Add to Cart</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{product.price} $</Card.Footer>
                </Card>
            ))}
        </Carousel>
    );
};

export default ProductCarousel;
