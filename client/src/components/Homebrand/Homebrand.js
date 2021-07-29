import React from "react";
import "./brand.scss";
import next1 from "../images/next1.png";
import next2 from "../images/next2.png";
import next3 from "../images/next3.jpg";
import next4 from "../images/next4.jpg";
import next5 from "../images/next5.jpg";
import next6 from "../images/next6.jpg";
import next7 from "../images/next7.png";
import next8 from "../images/next8.jpg";
import next9 from "../images/next9.jpg";
import next10 from "../images/next10.jpg";
import next11 from "../images/next11.jpg";
import next12 from "../images/next12.png";

const Homebrand = () => {
  const brdata = [
    {
      id: 1,
      img: next1,
    },
    {
      id: 2,
      img: next2,
    },
    {
      id: 3,
      img: next3,
    },
    {
      id: 4,
      img: next4,
    },
    {
      id: 5,
      img: next5,
    },
    {
      id: 6,
      img: next6,
    },
    {
      id: 7,
      img: next7,
    },
    {
      id: 8,
      img: next8,
    },
    {
      id: 9,
      img: next9,
    },
    {
      id: 10,
      img: next10,
    },
    {
      id: 11,
      img: next11,
    },
    {
      id: 12,
      img: next12,
    },
  ];
  return (
    <div className="brand-sec ">
      <div className="brand-title">
        Öne Çıkan <span>Markalar</span>
      </div>
      <div className="row p-3">
        {brdata.map((britem) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center p-0" key={britem.id}>
            <div className="b-img">
              <img src={britem.img} className="img-fluid" alt=""/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homebrand;
