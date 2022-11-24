import React from "react";
import { Card, Col } from "react-bootstrap";
import "./index.css";

const CardComponent = (props) => {
  const { produk, text, icon } = props;

  return (
    <Col sm="12" md="6" lg="3" className="p-2">
      <Card className="product-card-content">
        <img src={icon} width={35} height={35} />
        <h1 className="pb-2">{produk}</h1>
        <p>{text}</p>
      </Card>
    </Col>
  );
};

export default CardComponent;
