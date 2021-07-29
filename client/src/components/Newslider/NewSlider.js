import React from "react";
import "./slider.scss";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
const NewSlider = () => {
  const imgdata = [
    {
      id: 1,
      className: "carousel-item active",
      img: slider1,
    },
    {
      id: 2,
      className: "carousel-item ",
      img: slider2,
    },
    {
      id: 3,
      className: "carousel-item ",
      img: slider3,
    },
  ];
  return (
    <div className="container-w-100 mt-5">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {imgdata.map((carouselitem) => (
            <div className={carouselitem.className} key={carouselitem}>
              <img
                className="img-fluid w-100 carousel-img"
                src={carouselitem.img}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default NewSlider;
