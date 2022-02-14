import React from "react";
import "./SingleP.css";
import { Button } from "reactstrap";
const SingleP = () => {
  return (
    <div className="singleP">
      <div className="singleP__image">
        <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" />
      </div>
      <div className="singleP__title">
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
      </div>
      <div className="singleP__button">
        <Button color="primary" className="text-dark">
          Add Cart
        </Button>
        <Button color="warning" className="text-dark">
          View Product
        </Button>
      </div>
    </div>
  );
};

export default SingleP;
