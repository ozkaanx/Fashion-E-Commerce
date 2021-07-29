import React from "react";
import "./benefit.scss";
import { RiTruckLine } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { BiSupport, BiMessageDetail } from "react-icons/bi";

const Benefit = () => {
  const benfitdata = [
    {
      id: 1,
      title: "Ödeme & Teslimat",
      p: "Güvenilir ve hızlı teslimat",
      svg: <RiTruckLine />,
    },
    {
      id: 2,
      title: "Güvenilir Alışveriş",
      p: "Kaliteli - Güvenilir Hızlı Alışveriş",
      svg: <GiReturnArrow />,
    },
    {
      id: 3,
      title: "Kaliteli Destek",
      p: "Kaliteli - Güvenilir Hızlı Alışveriş",
      svg: <BiSupport />,
    },
    {
      id: 4,
      title: "Kaliteli Destek",
      p: "Kaliteli - Güvenilir Hızlı Alışveriş",
      svg: <BiMessageDetail />,
    },
  ];
  return (
    <div className="container mt-4">
      <div className="row ">
        {benfitdata.map((item) => (
          <div className="col-lg-3 col-sm-6 col-12 " key={item.id}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <span>{item.svg}</span>
              </div>
              <div className="benefit_content">
                <h3>{item.title}</h3>
                <p>{item.p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
