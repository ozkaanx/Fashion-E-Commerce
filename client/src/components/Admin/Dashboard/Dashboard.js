import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import "./dashboard.scss";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Benefit from '../../Benefit/Benefit'
import TotalMenu from "../TotalMenu/TotalMenu";

const Dashboard = ({ children }) => {
  const [authorized, setAuthorized] = useContext(AuthContext);
  let history = useHistory();

  if (authorized === true) {
    history.push("/dashboard");
  } else {
    history.push("/login");
  }

  return (
    <>
      <BrowserRouter>
        <DashboardMenu />
        {children}
        <Route exact path="/dashboard">
          <TotalMenu/>
        </Route>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
