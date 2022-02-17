import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import BaseUi from "../BaseUi/BaseUi";
import "./SingleProductView.css";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../fakeStoreAPI/products";
const SingleProductView = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  // const { rate } = productData.rating;
  // TODO:fetching the single product.
  useEffect(() => {
    getSingleProduct(productId).then((product) => setProductData(product));
  }, [productId]);
  const allProductStore = useSelector(
    (state) => state.allProductStoreSlice.allProduct[0]
  );
  console.log(productData);
  return (
    <BaseUi>
      <div className="singleproduct">
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="singleproduct__picture">
              <img src={productData.image} alt={productData.title} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="singleproduct__details">
              <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
                {productData.title}
              </h1>
              <p className="my-3">{productData.description}</p>
              <p>₹ {productData.price}</p>
              <div className="singleproduct__details_rating">
                4
                <span>
                  <ReactStars size={30} value={4} edit={false} isHalf={true} />
                </span>
              </div>
              <button>Add Cart</button>
            </div>
          </Col>
        </Row>
      </div>
    </BaseUi>
  );
};

export default SingleProductView;
