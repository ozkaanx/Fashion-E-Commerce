import React from "react";
import "./totalmenu.scss";

const TotalMenu = () => {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row">
        <div className="col-lg-4 col-sm-4 col-12">
          <div className="total-menu">
              <p className="total-title">Toplam Ürün Sayısı</p>
              <span className="total-count">10</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-12">
          <div className="total-menu">
              <p className="total-title">Toplam Kategori Sayısı</p>
              <span className="total-count">5</span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-12">
          <div className="total-menu">
              <p className="total-title">Toplam Mesaj Sayısı</p>
              <span className="total-count">30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalMenu;
