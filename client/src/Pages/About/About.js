import React, { useState, useEffect } from "react";
import "./about.scss";
import about from "../../components/images/about.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Axios from "axios";
const About = () => {
  const [aboutView, setaboutView] = useState([]);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = () => {
    Axios.get(`http://localhost:8080/settings/getabout`).then((response) => {
      setaboutView(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About
            </li>
          </ol>
        </nav>
        <div className="about-img">
          <img className="img-fluid" alt="" src={about}></img>
        </div>
        {aboutView.map((about) => (
          <div className="about-text " key={about.about_Id}>
            <div className="about-title">
              <h2>{about.about_title}</h2>
            </div>
            <div className="about-description">
              <p>{about.about_description}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 150 }}>
        <Footer />
      </div>
    </>
  );
};

export default About;
