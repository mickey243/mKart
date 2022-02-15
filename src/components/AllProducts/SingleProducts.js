import React from "react";
import "./SingleProduct.css";
import { useDispatch } from "react-redux";
import { productCartSliceAction } from "../../redux/ProductStore";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";

const SingleProducts = ({ data }) => {
  const { image, category, description, price, title } = data;
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(productCartSliceAction.addProductToCart());
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
            <Button color="warning" className="text-dark">
              View Product
            </Button>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SingleProducts;
