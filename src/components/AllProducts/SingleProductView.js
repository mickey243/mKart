import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import BaseUi from "../BaseUi/BaseUi";
import "./SingleProductView.css";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../fakeStoreAPI/products";
import { productCartSliceAction } from "../../redux/ProductStore";
const SingleProductView = () => {
  const dispatch = useDispatch();
  // fetching all the data from redux warehouse store.
  const { productId } = useParams();
  const [productDatas, setProductDatas] = useState();
  var productList = useSelector(
    (state) => state.warehouse.products.productList
  );
  //  var productList = useSelector(
  //    (state) => state.warehouse.products.productList
  //  );
  useEffect(() => {
    setProductDatas(productList);
  }, []);

  const [productData, setProductData] = useState([]);
  // const { rate } = productData.rating;
  // TODO:fetching the single product.
  useEffect(() => {
    getSingleProduct(productId).then((product) => setProductData(product));
  }, [productId]);

  const cartHandler = () => {
    dispatch(
      productCartSliceAction.addProductToCart({
        id: productData.id,
        title: productData.title,
        totalPrice: productData.price,
        image: productData.image,
      })
    );
  };

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
              <button onClick={cartHandler}>Add Cart</button>
            </div>
          </Col>
        </Row>
      </div>
    </BaseUi>
  );
};

export default SingleProductView;
