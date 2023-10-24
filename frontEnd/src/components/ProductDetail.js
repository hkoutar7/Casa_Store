import { FaStar, FaRegStar } from "react-icons/fa";

function ProductDetail (props){

    let {product} = props;
    let BlockStar = null, BlockStar2 = null;

    console.log(product);

    if (Object.keys(product).length !== 0) {
        let starNum = Math.round(product.rating["rate"]);
        const starsArray = Array.from({ length: starNum }, (_, index) => index);
        const starsArray2 = Array.from(
        { length: 5 - starNum },
        (_, index) => index
        );

        BlockStar = starsArray.map((star) => {
        return (
            <FaStar key={star}  />
        );
        });
        BlockStar2 = starsArray2.map((star) => {
        return (
            <FaRegStar key={star} />
        );
        });
    }

    return (
        <>
        <div className="container">
            <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
                <div className="card productDetail">

                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" >
                        <div className="outer_img" >
                        <div className="inner-img" style={{ backgroundImage: `url(${product.image})` }}></div>
                        </div>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                            {product.title}
                        </h5>
                        {
                            ( !product.category !== "" ) ?
                            <p style={{display : "none"}}></p>
                            :<p className="mb-2">{product.category}</p>

                        }
                        <p className="card-text card-desc"> {product.description} </p>
                        <hr className="my-4" />
                        <div className="card-rating">
                            <p className="card-text card-desc"> Ratings</p>
                            <div>
                                {BlockStar}
                                {BlockStar2}
                            </div>    
                        </div>
                        
                        <hr className="my-4" />
                        <p className="lead card-available">
                            <strong>Size Available</strong>
                        </p>
                        <ul className="list-unstyled list-inline d-flex justify-content-between">
                            <li className="list-inline-item me-0">
                                <div className="chip me-0">Sm</div>
                            </li>
                            <li className="list-inline-item me-0">
                                <div className="chip me-0"> Md </div>
                            </li>
                            <li className="list-inline-item me-0">
                                <div className="chip me-0">Xl</div>
                            </li>
                            <li className="list-inline-item me-0">
                                <div className="chip me-0">XXl</div>
                            </li>
                        </ul>
                        <p className="card-price">Only for <span>{product.price}$ </span></p>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}


export default ProductDetail ;

