import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import Axios from "axios";
import "../../Pages/Product/product.scss";

import { useHistory } from "react-router-dom";
const DetaiProduct = () => {
  const [randomupload, setrandomUpload] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8080/product/random-upload`).then(
      (response) => {
        setrandomUpload(response.data);
      }
    );
  }, []);

  let history = useHistory();
  return (
    <div className="container-xl" style={{ marginTop: 100 }}>
      <h2 style={{ fontSize: 25, textTransform: "capitalize" }}>
        Öne Çıkan Ürünler{" "}
      </h2>
      <div className="row">
        {randomupload.map((item) => (
          <div className="col-lg-3 col-md-4 col-6 p-4 product-col">
            <div className="row">
              <div className="product-card">
                <div className="product-hover">
                  <i className="far fa-heart"></i>
                  <i
                    onClick={() => {
                      history.push(`/detail/${item.productId}`);
                    }}
                    className="fas fa-search"
                  ></i>
                </div>
                <div className="product-image">
                  <Image
                    cloudName="oz-yazilim"
                    publicId={item.image}
                    className="img-fluid"
                  />
                </div>
                <div className="product-text">
                  <p className="text-title">{item.productName}</p>
                  <p className="text-price">{item.productPrice} ₺ </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DetaiProduct;
