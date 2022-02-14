import React, { useEffect, useState, Suspense } from "react";
import BaseUi from "../BaseUi/BaseUi";
import Axios from "axios";
import SingleProducts from "./SingleProducts";
import { getAllProducts } from "../../fakeStoreAPI/products";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const [allProduct, setAllProduct] = useState([]);

  const result = useSelector((state) => state.productCategoryStore.anyCategory);
  const isResult = useSelector(
    (state) => state.productCategoryStore.isAnyCategory
  );

  const getAllProducts = async () => {
    const { data } = await Axios.get("https://fakestoreapi.com/products");
    if (isResult) {
      const results = data.filter((item) => item.category === result);
      setAllProduct(results);
    } else {
      setAllProduct(data);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [result, isResult]);

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
