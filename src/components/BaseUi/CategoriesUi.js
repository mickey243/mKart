import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import "./CategoriesUi.css";
const CategoriesUi = () => {
  const dispatch = useDispatch();
  // fetching all the category from redux warehouse store.
  var { categoriesList, categoriesStatus } = useSelector(
    (state) => state.warehouse.categories
  );
  // end

  return (
    <Row className="category__row text-white">
      {categoriesList.map((category, index) => (
        <Col xs={12} md={3} key={category}>
          <ul>
            <li className="category__btn">{category.toUpperCase()}</li>
          </ul>
        </Col>
      ))}
    </Row>
  );
};

export default CategoriesUi;
