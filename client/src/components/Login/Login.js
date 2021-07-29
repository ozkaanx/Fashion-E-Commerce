import React, { useState, useContext, useEffect } from "react";
import "./login.scss";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [authorized, setAuthorized] = useContext(AuthContext);
  const [loginRoute , setLoginRoute] = useState();
  let history = useHistory();
  useEffect(() => {
    console.log(authorized);
  }, [authorized]);

  const loginUsers = () => {
    Axios.post("http://localhost:8080/admin/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        setAuthorized(response.data.loggedIn);
        localStorage.setItem(
          "authorized",
          JSON.stringify(response.data.loggedIn)
        );
      } else {
        setAuthorized(response.data.loggedIn);
        localStorage.setItem(
          "authorized",
          JSON.stringify(response.data.loggedIn)
        );
        history.push("/dashboard");
      }
    });
  };

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="log-section">
      <p>Admin Login</p>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={loginUsers}> Login </button>
      <span>{loginStatus}</span>
    </div>
    </div>
  );
};

export default Login;
