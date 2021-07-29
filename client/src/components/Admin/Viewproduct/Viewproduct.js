import React, { useEffect, useState } from "react";
import "./view.scss";
import Axios from "axios";
import { Image } from "cloudinary-react";

const Viewproduct = () => {
  const [yourUploads, setYourUploads] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/product/upload").then((response) => {
      setYourUploads(response.data);
      console.log(response.data);
    });
  }, []);

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:8080/product/delete/${id}`).then(() => {
      setYourUploads(
        yourUploads.filter((val) => {
          return val.productId !== id;
        })
      );
    });
  };

  return (
    <div className="container">
      <div className="row view-row" style={{marginTop:50}}>
        {yourUploads.map((val, key) => (
          <div className="col-lg-4 col-md-6 col-6 view-col p-0 m-0" key={key}>
            <div className="view-section">
              <div className="view-img">
                <Image
                  className="img-fluid"
                  cloudName="oz-yazilim"
                  publicId={val.image}
                />
              </div>
              <div className="view-text">
                <h5> {val.productName}</h5>
                <h5>{val.categoryName}</h5>
                <h5>Stok:  {val.productStock}</h5>
                <div className="delete-btn">
                  <button onClick={() => deleteProduct(val.productId)}>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewproduct;
