import React, { useContext, useEffect } from "react";
import "./shopcart.scss";
import { CartContext } from "../../Context/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import { Image } from "cloudinary-react";
import Footer from '../../components/Footer/Footer'
function Shopcart() {
  const [cart, setCart] = useContext(CartContext);
  useEffect(() => {
    localStorage.getItem(cart);
  }, []);

  const removeCart = (id) => {
    setCart(
      cart.filter((cartItem) => {
        {console.log(cartItem)}
        return cartItem.id !== id;
      })
    );
  };

  const clearCart = () =>{
    setCart([]);
    localStorage.clear("cart")
  }
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: 100 }}>
        <div className="shopcart-title">
          <p>Shop Cart </p>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              ShopCart
            </li>
          </ol>
        </nav>
        <div className="contaier" style={{ marginTop: 20 }}>
          <div className="row">
            <div className="col-lg-9">
              <table>
                <thead>
                  <tr>
                    <th className="th-product">Product</th>
                    <th className="th-price">Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cartItem) => (
                    <tr>
                      <td className="cart-product">
                        <Image
                          cloudName="oz-yazilim"
                          publicId={cartItem.image}
                          className="img-fluid"
                        />
                        <p>{cartItem.name}</p>
                      </td>
                      <td className="cart-price">
                        <p>{cartItem.productPrice}₺</p>
                      </td>
                      <td className="cart-qty">
                        <input value={cartItem.productQty}></input>
                      </td>
                      <td className="cart-total">
                        <p>{cartItem.productQty * cartItem.productPrice}₺</p>
                      </td>
                      <td className="cart-remove">
                        <button onClick={removeCart}>
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="btn-clear">
              <button onClick={clearCart}>Clear Cart</button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="total-section">
                <h4>Cart Total</h4>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Shopcart;
