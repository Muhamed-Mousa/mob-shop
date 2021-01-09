import React from "react";
import Carousel from "react-bootstrap/Carousel";


import { Slider } from "./carousel.styles";

const Caro = () => {
  return (
    <Slider>
      <div className="relative">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={900}
              height={500}
              alt="900x500"
              src="./images/one.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={900}
              height={500}
              alt="900x500"
              src="./images/two.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={900}
              height={500}
              alt="900x500"
              src="./images/three.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={900}
              height={500}
              alt="900x500"
              src="./images/four.png"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={900}
              height={500}
              alt="900x500"
              src="./images/five.png"
              alt="Fivth slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Slider>
  );
};
export default Caro;
