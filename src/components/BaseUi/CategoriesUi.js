import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "reactstrap";
import { getAllCategories } from "../../fakeStoreAPI/products";
import { productCategorySliceAction } from "../../redux/ProductCategoty";
import "./CategoriesUi.css";
const CategoriesUi = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState([]);
  useEffect(() => {
    getAllCategories().then((categories) => setCategory(categories));
  }, []);

  const categoryHandler = (category) => {
    dispatch(productCategorySliceAction.addCategory(category));
  };
  return (
    <Row className="category__row text-white">
      {category.map((category, index) => (
        <Col xs={3} key={category}>
          <ul>
            <li
              className="category__btn"
              onClick={() => categoryHandler(category)}
            >
              {category}
            </li>
          </ul>
        </Col>
      ))}
    </Row>
  );
};

export default CategoriesUi;
