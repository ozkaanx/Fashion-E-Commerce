import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Axios from "axios";
import { Image } from "cloudinary-react";
import Footer from "../../components/Footer/Footer";
import "./product.scss";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import AOS from "aos";

const Product = () => {
  const [pview, setpView] = useState([]);
  const [getCategory, setgetCategory] = useState([]);
  const [getSize, setgetSize] = useState([]);
  const [loading, setloading] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 80%;
    left: 48%;
    border-color: red;
  `;

  let history = useHistory();

  useEffect(() => {
    uploadProduct();
    categoryGet();
    SizeGet();
    setloading(false);
    AOS.init({ duration: 1500 });
  }, [setpView]);

  const uploadProduct = () => {
    Axios.get(`http://localhost:8080/product/upload`).then((response) => {
      setpView(response.data);
    });
  };

  const categoryGet = () => {
    Axios.get("http://localhost:8080/category/getcategory").then((response) => {
      setgetCategory(response.data);
    });
  };

  const SizeGet = () => {
    Axios.get("http://localhost:8080/category/getsize").then((response) => {
      setgetSize(response.data);
    });
  };

  const selectCategory = (id) => {
    Axios.get(`http://localhost:8080/category/getcategory/${id}`).then(
      (response) => {
        setloading(true);
        setTimeout(() => {
          setpView(response.data);
          setloading(false);
        }, 1000);
      }
    );
  };

  const selectSize = (id) => {
    Axios.get(`http://localhost:8080/category/getsize/${id}`).then(
      (response) => {
        setloading(true);
        setTimeout(() => {
          setpView(response.data);
          setloading(false);
        }, 1500);
    })}

  return (
    <>
      <Navbar />
      <div className="container-xl" style={{ marginTop: 100 }}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-3 cate-col d-none d-xl-block d-md-block ">
            <div className="category m-0 mb-4">
              <div className="category-title">
                <h2>Category</h2>
              </div>
              <hr className="mt-0" />
              <div className="category-list m-0">
                <ul>
                  {getCategory.map((category) => (
                    <li key={category.category_Id}>
                      <a onClick={() => selectCategory(category.category_Id)}>
                        {category.categoryName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="size">
              <div className="size-title">
                <h2>Size</h2>
              </div>
              <hr className="mt-0" />
              <div className="size-list m-0">
                {getSize.map((size) => (
                  <div className="list-check" key={size.size_Id}>
                    <label>
                      {size.sizeName[0]}
                      <input
                        type="checkbox"
                        onClick={() => selectSize(size.size_Id)}
                      ></input>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-9 product-col">
            <div className="p-total">
              <span>Toplam Ürün Sayısı {pview.length}</span>
            </div>
            {loading ? (
              <PuffLoader css={override}></PuffLoader>
            ) : (
              <div className="row">
                {pview.map((item) => (
                  <div
                    className="col-6 col-md-4 col-sm-4 p-2 mb-4"
                    key={item.productId}
                  >
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
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 230 }}>
        <Footer />
      </div>
    </>
  );
};

export default Product;
