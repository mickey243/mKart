import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BaseUi.css";
import { productCategorySliceAction } from "../../redux/ProductCategoty";
const BaseUi = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const productTotalCount = useSelector(
    (state) => state.productStore.totalProductCount
  );

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
              <button className="baseui__btn cart__btn" style={{ width: 200 }}>
                {productTotalCount} cart
              </button>
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
