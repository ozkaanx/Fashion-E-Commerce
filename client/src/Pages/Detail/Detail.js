import React, { useEffect, useState, useContext } from "react";
import "./detail.scss";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { Image } from "cloudinary-react";
import Navbar from "../../components/Navbar/Navbar";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Footer from "../../components/Footer/Footer";
import { AiTwotoneStar } from "react-icons/ai";
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";
import {
  TiSocialTwitterCircular,
  TiSocialPinterestCircular,
} from "react-icons/ti";
import DetaiProduct from "../../components/DetailProduct/DetailProduct";
import { CartContext } from "../../Context/CartContext";
function Detail() {
  let { productId } = useParams();
  const [detail, setDetail] = useState({});
  const [produtSize, setProductSize] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    getDetail();
    getSize();
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    const item = cart.find((cartItem) => cartItem.id === productId);
    if (item) {
      item.productQty++;
      setCart([...cart]);
    } else {
      const basket = {
        name: detail.productName,
        id: productId,
        productPrice: detail.productPrice * qty,
        productQty: qty,
        image: detail.image,
      };
      setCart([...cart, basket]);
    }
  };

  const getDetail = () => {
    Axios.get(`http://localhost:8080/product/upload/${productId}`).then(
      (data) => {
        setDetail({
          productName: data.data[0].productName,
          image: data.data[0].image,
          productStock: data.data[0].productStock,
          productPrice: data.data[0].productPrice,
          description: data.data[0].description,
          categoryName: data.data[0].categoryName,
          sizeId: data.data[0].sizeId,
        });
      }
    );
  };

  const increment = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    setQty(qty - 1);
  };

  const getSize = () => {
    Axios.get(`http://localhost:8080/category/getsize`).then((response) => {
      setProductSize(response.data);
    });
  };
  return (
    <>
      <Navbar />
      <div className="container-lg" style={{ maxWidth: 1200, marginTop: 70 }}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {detail.productName}
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-6">
            <div className="detail-img">
              <Zoom>
                <Image
                  cloudName="oz-yazilim"
                  publicId={detail.image}
                  className="img-fluid"
                />
              </Zoom>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-detail">
              <h2 className="product-title">{detail.productName}</h2>
              <div className="product-stars">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </div>
              <div className="product-price">{detail.productPrice}₺</div>
              <div className="product-content">
                <p>{detail.description}</p>
              </div>
              <div className="product-size">
                <p>Size: </p>
                <select name="size">
                  <option value="#">Selecet a Size</option>
                  {produtSize.map((size) => (
                    <option key={size.sizeId} value={size.sizeName}>
                      {size.sizeName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="product-quantity">
                <p>Qty: </p>
                <div className="input-group">
                  <input value={qty}></input>
                  <button onClick={increment} className="btn-1">
                    +
                  </button>
                  <button onClick={decrease} className="btn-2">
                    -
                  </button>
                </div>
              </div>
              <div className="product-stock">
                <p>Stock: </p>
                <button>{detail.productStock}</button>
              </div>
              <div className="cart-button">
                <button onClick={addToCart}>Add To Cart</button>
              </div>
              <hr />
              <div className="product-category">
                <div className="category-text">
                  <p>Category:</p>
                  <a href="">{detail.categoryName} </a>
                </div>
                <div className="product-share">
                  <a href="">
                    <RiFacebookCircleLine />
                  </a>
                  <a href="">
                    <TiSocialTwitterCircular />
                  </a>
                  <a href="">
                    <RiInstagramLine />
                  </a>
                  <a href="">
                    <TiSocialPinterestCircular />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-section" style={{ marginTop: 50 }}>
          <div className="section-title">
            <h3>Details</h3>
          </div>
          <div className="section-text">
            <p>{detail.description}</p>
          </div>
        </div>
      </div>
      <DetaiProduct />
      <Footer />
    </>
  );
}

export default Detail;
