import React, { useState, useEffect } from "react";
import "./add.scss";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Addproduct = () => {
  const [productName, setproductName] = useState("");
  const [description, setDescription] = useState("");
  const [productStock, setproductStock] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [image, setImage] = useState([]);
  const [categoryId, setcategoryId] = useState([]);
  const [sizeId, setsizeId] = useState([]);
  const [viewcategory, setviewCategory] = useState([]);
  const [viewSize, setviewSize] = useState([]);
  const history = useHistory();

  useEffect(() => {
    category();
    size();
  }, []);

  const category = () => {
    Axios.get(`http://localhost:8080/category/getcategory`).then((response) => {
      setviewCategory(response.data);
    });
  };

  const size = () => {
    Axios.get(`http://localhost:8080/category/getsize`).then((response) => {
      setviewSize(response.data);
    });
  };

  const upload = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "cloudinary name");
    Axios.post(
      `https://api.cloudinary.com/v1_1/"cloud-name"/image/upload`,
      formData
    ).then((response) => {
      const fileName = response.data.public_id;
      Axios.post(`http://localhost:8080/product/add`, {
        productName: productName,
        productStock: productStock,
        productPrice: productPrice,
        description: description,
        sizeId: sizeId,
        categoryId: categoryId,
        image: fileName,
      }).then((response) => {
        history.push("/dashboard/viewproduct");
      });
    });
  };

  return (
    <div className="container" style={{ marginTop: 30 }}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-left">
            <label htmlFor>Ürün Adı</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setproductName(e.target.value);
              }}
            ></input>
            <label htmlFor>Stok</label>
            <input
              type="number"
              onChange={(e) => {
                setproductStock(e.target.value);
              }}
            ></input>
            <label htmlFor>Fiyat</label>
            <input
              type="number"
              onChange={(e) => {
                setproductPrice(e.target.value);
              }}
            ></input>
            <label htmlFor>Ürün Açıklama</label>
            <textarea
              rows="6"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-right">
            <label htmlFor>Ürün Size</label>
            <select
              className="select"
              onChange={(e) => {
                setsizeId(e.target.value);
              }}
            >
              <option>Size</option>
              {viewSize.map((item) => (
                <option value={item.size_Id} key={item.size_Id}>
                  {item.sizeName}
                </option>
              ))}
            </select>
            <label htmlFor>Ürün kategori</label>

            <select
              className="select"
              onChange={(e) => {
                setcategoryId(e.target.value);
              }}
            >
              <option>Kategori Seçiniz</option>
              {viewcategory.map((item) => (
                <option value={item.category_Id} key={item.category_Id}>
                  {item.categoryName}
                </option>
              ))}
            </select>

            <label htmlFor="">Ürün Resmi</label>
            <input
              style={{ height: 70 }}
              type="file"
              onChange={(e) => setImage(e.target.files)}
            ></input>

            <button onClick={upload}>Ürün Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
