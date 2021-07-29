import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./category.scss";
import { useHistory } from "react-router-dom";
import { RiDeleteBack2Line } from "react-icons/ri";

const AddCategory = () => {
  const history = useHistory();
  const [categoryName, setCategoryName] = useState("");
  const [getCategory, setgetCategory] = useState([""]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorClass, setErrorClass] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:8080/category/getcategory").then((response) => {
      setgetCategory(response.data);
    });
  }, []);

  const categoryAdd = () => {
    Axios.post(`http://localhost:8080/category/categoryadd`, {
      categoryName: categoryName,
    }).then((response) => {
      if (categoryName === "") {
        setErrorMessage(response.data.message);
      } else {
        setErrorMessage("Kategori Eklendi");
        setErrorClass(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        history.push("/dashboard/addcategory");
      }
    });
  };

  const deleteCategory = (id) => {
    Axios.delete(`http://localhost:8080/category/delete/${id}`).then(
      (response) => {
        setgetCategory(
          getCategory.filter((val) => {
            return val.category_Id !== id;
          })
        );
      }
    );
  };
  return (
    <>
      <div className="container mt-4">
        <div className="add-section">
          <label>Kategori Adı</label>
          <input
            type="text"
            required
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          ></input>
        </div>
        <div className="section-button">
          <button onClick={categoryAdd}>Kategori Ekle</button>
        </div>
        <div className={errorClass ? "succes" : "danger"}>{errorMessage}</div>

        <div className="list-section mt-5">
          <div className="row p-3">
            {getCategory.map((item, id) => (
              <div className="col-lg-3 col-12 col-md-6 mt-2 " key={id}>
                <div className="list-item">
                  <p>{item.categoryName}</p>
                  <div className="item-delete">
                    <RiDeleteBack2Line
                      onClick={() => deleteCategory(item.category_Id)}
                      className="delete"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
