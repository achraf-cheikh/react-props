import React from "react";
import "./Comp1.css";
import { Carousel } from "react-bootstrap";

const Comp1 = ({ carouss }) => {
  return (
    <div>
      <Carousel
        style={{ width: "1000px", height: "600px", marginLeft: "200px" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouss.imag2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Livraison gratuite à partir de 150 DT</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouss.imag1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Livraison gratuite à partir de 150 DT</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouss.imag3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Livraison gratuite à partir de 150 DT</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Comp1;
