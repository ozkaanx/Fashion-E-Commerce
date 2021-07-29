import React, { useState, useEffect ,useContext  } from "react";
import { Link ,useHistory } from "react-router-dom";
import "./dashboardMenu.scss";
import { IoAddCircleOutline } from "react-icons/io5";
import { AuthContext } from "../../../Context/AuthContext";
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineSetting,
} from "react-icons/ai";

const DashboardMenu = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const [authorized, setAuthorized] = useContext(AuthContext);
  let history = useHistory();

  const Logout = () => {
    localStorage.removeItem("authorized");
    setTimeout(() => {
      history.push("/login");
      window.location.reload();
    }, 100);

  };
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <>
      <div className="navbar">
        <div className="topbar mt-2">
          <div className="container" style={{ maxWidth: 1200 }}>
            <div className="top-left">
              <p>Hoşgeldin Admin</p>
            </div>
            <div className="top-right">
              <button onClick={Logout}>Logout</button>
              <button className="navbar-btn" onClick={toggleNavbar}>
                <AiOutlineUnorderedList />
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="navbar-menu">
            <div className="menu-item">
              <div className="menu-icon">
                <AiOutlineHome />
              </div>
              <Link to="/dashboard"> Anasayfa </Link>
            </div>
            <div className="menu-item">
              <div className="menu-icon">
                <IoAddCircleOutline />
              </div>
              <Link to="/dashboard/addproduct"> Ürün Ekle </Link>
            </div>
            <div className="menu-item">
              <div className="menu-icon">
                <IoAddCircleOutline />
              </div>
              <Link to="/dashboard/addcategory"> Kategori Ekle </Link>
            </div>
            <div className="menu-item">
              <div className="menu-icon">
                <AiOutlineUnorderedList />
              </div>
              <Link to="/dashboard/viewproduct"> Ürünleri Listele </Link>
            </div>
      
          </div>
          <div className="responsive-menu" id={openLinks ? "open" : "close"}>
            <div className="hiddenLinks">
              <div className="menu-item">
                <div className="menu-icon">
                  <AiOutlineHome />
                </div>
                <Link to="/dashboard"> Anasayfa </Link>
              </div>
              <div className="menu-item">
                <div className="menu-icon">
                  <IoAddCircleOutline />
                </div>
                <Link to="/dashboard/addproduct"> Ürün Ekle </Link>
              </div>
              <div className="menu-item">
                <div className="menu-icon">
                  <IoAddCircleOutline />
                </div>
                <Link to="/dashboard/addcategory"> Kategori Ekle </Link>
              </div>
              <div className="menu-item">
                <div className="menu-icon">
                  <AiOutlineUnorderedList />
                </div>
                <Link to="/dashboard/viewproduct"> Ürünleri Listele </Link>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMenu;
