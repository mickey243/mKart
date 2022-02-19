import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import "./CategoriesUi.css";
import { productCategorySliceAction } from "../../redux/ProductCategoty";

const CategoriesUi = () => {
  const dispatch = useDispatch();
  // fetching all the category from redux warehouse store.
  var { categoriesList, categoriesStatus } = useSelector(
    (state) => state.warehouse.categories
  );
  // end
  const categoryHandler = (category) => {
    dispatch(productCategorySliceAction.addCategory(category));
  };
  const cartHandlerEmpty = () => {
    dispatch(productCategorySliceAction.removeCategory());
  };

  return (
    <Row className="category__row text-white">
      <Col xs={12} md={12} className="category__col">
        <ul>
          <li onClick={cartHandlerEmpty} className="category__btn">
            All
          </li>
        </ul>
        {categoriesList.map((category, index) => (
          <ul key={category}>
            <li
              className="category__btn"
              onClick={() => categoryHandler(category)}
            >
              {category.toUpperCase()}
            </li>
          </ul>
        ))}
      </Col>
    </Row>
  );
};

export default CategoriesUi;
