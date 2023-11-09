import axios from 'axios';
import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch} from 'react-redux';
import {addProductToBasket} from "./../tlk/reducer/basketSlice";

function formatText (word, type){
    switch (type)
    {
        case "title" :
            return (word.length > 30) ? `${word.slice(0, 30)}...` :  word;
        case "description" :
            return (word.length > 150) ? `${word.slice(0, 150)}...` :  word;
        default :
            return null;
    }
}

export default function CardProduct(props) {

    let {id, title ,desc,price,img} = props;
    let dispatch = useDispatch();

    let addProduct = async (id) => {
        const data = await axios.get(`http://localhost:3001/products/${id}`);
        const product = await data.data;
        console.log(product);

        dispatch(addProductToBasket(product));
    }

    return (
        <>
        <Card className="text-center" style={{ height : "370px" }}>
            <Card.Header>{formatText(title, "title")}</Card.Header>
            <Card.Body>
                <img src={img} alt="img isn\'t found" style={{width : '50px' }} />
                <Card.Text> { formatText(desc, "description") } </Card.Text>
                <Button onClick={ () => addProduct(id) } variant="primary">Add to Cart</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{price} $</Card.Footer>
        </Card>
        </>
    );
}
