import React, { useEffect, useState, Suspense } from "react";
import BaseUi from "../BaseUi/BaseUi";
import CategoriesUi from "../BaseUi/CategoriesUi";
import SingleProducts from "./SingleProducts";
import { Col, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, getAllCategory } from "../../redux/WareHouse";

const AllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategory());
  }, [getAllProducts]);

  // fetching all the data from redux warehouse store.
  var { productList, productsStatus } = useSelector(
    (state) => state.warehouse.products
  );
  // end

  // fetching the category and modifying the output
  const isAnyCategoryExist = useSelector(
    (state) => state.productCategoryStore.isAnyCategory
  );
  const CategoryName = useSelector(
    (state) => state.productCategoryStore.anyCategory
  );
  const newData = useSelector((state) => state.warehouse.products.productList);
  if (isAnyCategoryExist) {
    const result = newData.filter((item) => item.category === CategoryName);
    productList = result;
  }
  // end
  return (
    <BaseUi>
      <CategoriesUi />
      <Row>
        {productsStatus === "loading" && <h1>Loading API...</h1>}
        {productsStatus === "failed" && <h1>Error while fetching api</h1>}
        {productsStatus === "success" &&
          productList.map((item) => (
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
    </BaseUi>
  );
};

export default AllProducts;
