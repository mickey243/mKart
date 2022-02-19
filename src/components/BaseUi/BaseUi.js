import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BaseUi.css";
import { productCategorySliceAction } from "../../redux/ProductCategoty";
import { NavLink } from "react-router-dom";
const BaseUi = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const productTotalCount = useSelector(
    (state) => state.productStore.totalProductCount
  );
  // <NavLink
  //           // target="_blank"
  //           className="btn btn-warning"
  //           to={`/product/${id}`}
  //         >
  //           View Product
  //         </NavLink>

  return (
    <>
      <div className="baseui">
        <div className="baseui__logo">
          <ul>
            <li style={{ color: "white", cursor: "pointer" }}>Home</li>
          </ul>
        </div>
        <div className="baseui__navbar">
          <ul>
            <li>
              <NavLink
                className="baseui__btn cart__btn text-center"
                style={{ width: 200 }}
                to={`/cart`}
              >
                <span className="cart__btn__txt">{productTotalCount}+</span>
                <span> cart</span>
              </NavLink>
            </li>
            <li>
              <button className="baseui__btn">About</button>
            </li>
            {!isAuthenticated && (
              <li>
                <button className="baseui__btn">Login</button>
              </li>
            )}

            {isAuthenticated && (
              <li>
                <button className="baseui__btn">Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {props.children}
    </>
  );
};

export default BaseUi;
