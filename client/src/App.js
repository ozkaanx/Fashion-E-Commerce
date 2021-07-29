import React, { useEffect, useState } from "react";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeProduct from "./components/HomeProduct/HomeProduct";
import Login from "./components/Login/Login";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Product from "./Pages/Product/Product";
import Detail from "./Pages/Detail/Detail";
import NewSlider from "./components/Newslider/NewSlider";
import Benefit from "./components/Benefit/Benefit";
import Footer from "./components/Footer/Footer.js";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Banner from "./components/Banner/Banner";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./Pages/About/About";
import Addproduct from "./components/Admin/AddProduct/Addproduct";
import AddCategory from "./components/Admin/AddCategory/AddCategory";
import Viewproduct from "./components/Admin/Viewproduct/Viewproduct";
import Shopcart from "./Pages/ShopCart/Shopcart";
import Contact from "./Pages/Contact/Contact";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Router>
        <AuthProvider>
          <CartProvider>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/dashboard/:path?">
                <Dashboard>
                  <Switch>
                    <Route
                      path="/dashboard/addproduct"
                      component={Addproduct}
                    />
                    <Route
                      path="/dashboard/addcategory"
                      component={AddCategory}
                    />
                    <Route
                      path="/dashboard/viewproduct"
                      component={Viewproduct}
                    />
                  </Switch>
                </Dashboard>
              </Route>
              {loading ? (
                <LoadingScreen />
              ) : (
                <Route exact path="/">
                  <Navbar />
                  <NewSlider />
                  <Benefit />
                  <Banner />
                  <HomeProduct />
                  <Newsletter />
                  <Footer />
                </Route>
              )}
              <Route path="/product" component={Product}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/detail/:productId" component={Detail} />
              <Route path="/cart" component={Shopcart}></Route>
            </Switch>
          </CartProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
