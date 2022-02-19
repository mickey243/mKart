import React from "react";
import "./CartPageView.css";
import { Card, Col, Row, Input } from "reactstrap";
import BaseUi from "../BaseUi/BaseUi";
import { useSelector, useDispatch } from "react-redux";
import { productCartSliceAction } from "../../redux/ProductStore";

const CartPageView = () => {
  const dispatch = useDispatch();
  const { products, totalProductCount, totalAmount } = useSelector(
    (state) => state.productStore
  );
  const removeProductHandler = (id) => {
    dispatch(productCartSliceAction.removeProductFromCart(id));
  };
  const addProductHandler = (item) => {
    const { id, title, price, image } = item;
    dispatch(
      productCartSliceAction.addProductToCart({
        id,
        title,
        price,
        image,
      })
    );
  };
  return (
    <BaseUi>
      <Row className="text-center">
        <h1>Check Out Page</h1>
        <Col xs={12} sm={12} md={9}>
          <div className="cartpage__products">
            {!totalProductCount && <h1>Cart is Empty...</h1>}
            {products.map((item, index) => (
              <Card className="cartpage__product_card" key={index}>
                <div className="cartpage__products__img">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cartpage__products__info">
                  <p>{item.title}</p>
                  <p>Quantity : {item.quantity}</p>
                  <p>Price : {item.price}</p>
                  <p>Total : {item.totalPrice}</p>
                  <div className="cartpage__products__info_btn">
                    <button
                      onClick={() =>
                        addProductHandler({
                          id: item.id,
                          title: item.title,
                          totalPrice: item.totalPrice,
                          image: item.image,
                          price: item.price,
                        })
                      }
                      className="cart__product_btn_add mx-2"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => removeProductHandler(item.id)}
                      className="cart__product_btn_remove"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Col>

        <Col xs={12} sm={12} md={3}>
          {totalProductCount !== 0 && (
            <div className="cartpage__checkout">
              <p>Total Amount: {totalAmount} </p>
              <p>Total Count: {totalProductCount} </p>
              <Input type="select" className="mx-5">
                <option>Please Select Payment Method</option>
                <option>C.O.D</option>
                <option>PhonePay</option>
                <option>GooglePay</option>
              </Input>

              <button
                onClick={() => dispatch(productCartSliceAction.checkOutStore())}
                className="mx-5 cartpage__checkout__btn"
              >
                Check Out
              </button>
            </div>
          )}
        </Col>
      </Row>
    </BaseUi>
  );
};

export default CartPageView;
