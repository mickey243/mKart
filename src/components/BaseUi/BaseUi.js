import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BaseUi.css";
import { productCategorySliceAction } from "../../redux/ProductCategoty";
import { authAction } from "../../redux/AuthSlice";
import { NavLink, useNavigate } from "react-router-dom";
const BaseUi = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const productTotalCount = useSelector(
    (state) => state.productStore.totalProductCount
  );
  const logoutHandler = () => {
    dispatch(authAction.logOut());
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="baseui">
        <div className="baseui__logo">
          <ul>
            <li
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
          </ul>
        </div>
        <div className="baseui__navbar">
          <ul>
            <li>
              {isAuthenticated && (
                <NavLink
                  className="baseui__btn cart__btn text-center"
                  style={{ width: 200 }}
                  to={`/cart`}
                >
                  <span className="cart__btn__txt">{productTotalCount}+</span>
                  <span> cart</span>
                </NavLink>
              )}
            </li>
            <li>
              <button className="baseui__btn">About</button>
            </li>
            {!isAuthenticated && (
              <li>
                <button
                  className="baseui__btn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <button
                  className="baseui__btn"
                  onClick={() => navigate("/signin")}
                >
                  SignUp
                </button>
              </li>
            )}

            {isAuthenticated && (
              <li>
                <button className="baseui__btn" onClick={logoutHandler}>
                  Logout
                </button>
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
