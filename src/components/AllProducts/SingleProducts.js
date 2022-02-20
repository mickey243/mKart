import React from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { productCartSliceAction } from "../../redux/ProductStore";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Container,
} from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const SingleProducts = ({ data }) => {
  const navigate = useNavigate();
  const { image, category, description, price, title, id } = data;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const cartHandler = () => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
    dispatch(
      productCartSliceAction.addProductToCart({
        id,
        title,
        totalPrice: price,
        image,
      })
    );
  };

  return (
    <Container className="singleProduct">
      <Card className="singleProduct__card" height="600px">
        <CardImg
          top
          className="singleProduct__img"
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="text-center singleProduct__cardtxt">
            {title}
          </CardTitle>
          <div className="singleProduct__cardbtn">
            <Button
              color="primary"
              className="text-dark mx-2"
              onClick={cartHandler}
            >
              Add Cart
            </Button>
            {/* <Button color="warning" className="text-dark">
              View Product
            </Button> */}
            <NavLink
              // target="_blank"
              className="btn btn-warning"
              to={`/product/${id}`}
            >
              View Product
            </NavLink>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SingleProducts;
