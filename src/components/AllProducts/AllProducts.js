import React, { useEffect, useState, Suspense } from "react";
import BaseUi from "../BaseUi/BaseUi";
import Axios from "axios";
import SingleProducts from "./SingleProducts";
import { getAllProducts } from "../../fakeStoreAPI/products";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import jsonData from "../../redux/DataFromAPIManually";

const AllProducts = () => {
  // const [allProduct, setAllProduct] = useState([]);
  let allProduct = jsonData;
  const categoryStoreByClick = useSelector(
    (state) => state.productCategoryStore.anyCategory
  );
  const isAnyCategoryClick = useSelector(
    (state) => state.productCategoryStore.isAnyCategory
  );
  if (isAnyCategoryClick) {
    const results = allProduct.filter(
      (item) => item.category === categoryStoreByClick
    );
    allProduct = results;
  }

  return (
    <BaseUi>
      <Row>
        {/* <div > */}
        {allProduct.map((item) => (
          <Col
            md={4}
            lg={3}
            sm={6}
            xs={12}
            className="allproduct__single"
            key={item.id}
          >
            <Suspense fallback={<h1>Loading......</h1>} key={item.id}>
              <SingleProducts data={item} key={item.id} />
            </Suspense>
          </Col>
        ))}
      </Row>
      {/* <SingleProducts /> */}
      {/* </div> */}
    </BaseUi>
  );
};

export default AllProducts;
