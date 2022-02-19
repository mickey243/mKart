import React from "react";
import "./CartPageView.css";
import { Card, Col, Row, Input } from "reactstrap";
import BaseUi from "../BaseUi/BaseUi";

const CartPageView = () => {
  return (
    <BaseUi>
      <Row className="text-center">
        <h1>Check Out Page</h1>
        <Col xs={12} sm={12} md={6}>
          <div className="cartpage__products">
            <Card className="cartpage__product_card">
              <div className="cartpage__products__img">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  alt="product"
                />
              </div>
              <div className="cartpage__products__info">
                <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                <p>Quantity : 10</p>
                <p>Total : 1000</p>
                <div className="cartpage__products__info_btn">
                  <button className="cart__product_btn_add mx-2">Add</button>
                  <button className="cart__product_btn_remove">Remove</button>
                </div>
              </div>
            </Card>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <div className="cartpage__checkout">
            {/* <Card> */}
            <p>Total Amount: 1000 </p>
            <p>Total Count: 15 </p>

            <Input type="select" className="mx-5">
              <option>Please Select Payment Method</option>
              <option>C.O.D</option>
              <option>PhonePay</option>
              <option>GooglePay</option>
            </Input>

            <button className="mx-5 cartpage__checkout__btn">Check Out</button>
            {/* </Card> */}

            <div className="cartpage__checkout__payment"></div>
          </div>
        </Col>
      </Row>
    </BaseUi>
  );
};

export default CartPageView;
