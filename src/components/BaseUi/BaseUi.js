import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BaseUi.css";
import CategoriesUi from "./CategoriesUi";
import { productCategorySliceAction } from "../../redux/ProductCategoty";
const BaseUi = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const productTotalCount = useSelector(
    (state) => state.productStore.totalProductCount
  );

  const homeHandler = () => {
    dispatch(productCategorySliceAction.removeCategory());
  };
  return (
    <>
      <div className="baseui">
        <div className="baseui__logo">
          <ul>
            <li
              onClick={homeHandler}
              style={{ color: "white", cursor: "pointer" }}
            >
              Home
            </li>
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
                <button className="baseui__btn">Cart</button>
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
      <CategoriesUi />
      {props.children}
    </>
  );
};

export default BaseUi;
