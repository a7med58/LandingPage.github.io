import Carousel from "react-bootstrap/Carousel";
import "./Caro.css";
import Data from "./Data";

const CarouselView = () => {
  const carouselView = Data.map((item) => {
    return (
      <Carousel.Item>
        <img src={item.img} alt="IMG" />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.skillpres}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2> Skills </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 .col-lg-12">
            <Carousel>{carouselView}</Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselView;
