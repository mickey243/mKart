import React from "react";
import { Col, Row } from "reactstrap";
import BaseUi from "../BaseUi/BaseUi";
import "./SingleProductView.css";
import ReactStars from "react-rating-stars-component";
const SingleProductView = () => {
  const firstExample = {
    size: 30,
    value: 3.5,
    edit: false,
    isHalf: true,
  };
  return (
    <BaseUi>
      <div className="singleproduct">
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="singleproduct__picture">
              <img
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="singleproduct__details">
              <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
                Mens Cotton Jacket
              </h1>
              <p className="my-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                iste commodi laudantium delectus molestias unde impedit suscipit
                officia soluta eius ipsum rem reiciendis in facilis architecto
                quos fuga, esse nobis? Fugiat ducimus dicta consectetur dolor ea
                rem deserunt, commodi ex enim. Voluptate, eaque. Non sit
                assumenda, culpa eos enim laboriosam voluptas. Facilis, ad quod
                repellendus exercitationem dignissimos deserunt at rem.
              </p>
              <p>₹ 400</p>
              <div className="singleproduct__details_rating">
                2.3
                <span>
                  <ReactStars
                    size={30}
                    value={2.5}
                    edit={false}
                    isHalf={true}
                  />
                </span>
              </div>
              <button>Add Cart</button>
            </div>
          </Col>
        </Row>
      </div>
    </BaseUi>
  );
};

export default SingleProductView;
