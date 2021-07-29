import React, { useState, useEffect } from "react";
import contact from "../../components/images/contact.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Axios from "axios";
import "./contact.scss";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  const [contactView, setContactView] = useState([]);

  useEffect(() => {
    getContact();
  }, []);

  const getContact = () => {
    Axios.get(`http://localhost:8080/settings/getcontact`).then((response) => {
      setContactView(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <Navbar />
      {contactView.map((contactItem) => (
        <div className="container mt-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
          <div className="contact-map">
            <iframe
              src={contactItem.mapLink}
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-section">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="row">
                  <div className="col-lg-7 col-12">
                    <div className="cont-adress">
                      <h3 className="adress-title">Adress</h3>
                      <p>{contactItem.adress}</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <ul className="cont-list">
                      <li>
                        <i className="fas fa-phone fa-rotate-90"></i>
                        <span>{contactItem.telephone}</span>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <span>{contactItem.mail}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <div className="col-lg-6 col-12">
                <h3 style={{ fontSize: 20, marginBottom: 20 }}>Contact Us</h3>
                <div className="contact-form">
                  <div className="cont-left">
                    <input type="text" placeholder="Name *"></input>
                    <input type="text" placeholder="E-mail *"></input>
                  </div>
                  <div className="cont-right">
                    <input type="text" placeholder="Phone"></input>
                    <input type="text" placeholder="Subject"></input>
                  </div>
                </div>
                <textarea name="" id="" cols="20" rows="10" placeholder="Message *"></textarea>
                <button className="cont-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: 150 }}>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
