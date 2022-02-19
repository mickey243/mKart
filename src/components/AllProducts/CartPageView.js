import React from "react";
import "./CartPageView.css";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const CartPageView = () => {
  return (
    <Row className="text-center">
      <Col xs={12} sm={12} md={6}>
        <div className="cartpage__products">
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6}>
        <div className="cartpage__checkout">checkoutdetails</div>
      </Col>
    </Row>
  );
};

export default CartPageView;
