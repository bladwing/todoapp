import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {api} from "../../utils/requests";

import "./auth.scss";


const Auth = () => {
  useEffect(() => {
    getUsers();
    LoginChecker();
  }, []);

  const getUsers = async () => {
    await axios.get(api + "/users").then((response) => {
      setUsers(response.data);
    });
  };

  const [users, setUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState();
  const [Error, setError] = useState();
  const navMain = useNavigate();


  const Submit = async (e) => {
    e.preventDefault();

    const CheckerLogin = users.find((user) => user.name !== Login);
    const CheckerPwd = users.find((user) => user.pwd !== Password);
    
    CheckerLogin
      ? setError("UserName is wrong")
      : CheckerPwd
      ? setError("PWD is wrong")
      : setIsLogged(true) ||
        setError("") ||
        LocalStorage() ||
        navMain("/tasks") || window.location.reload();
  };

  const LocalStorage = () => {
    localStorage.setItem("Login", JSON.stringify([Login, Password]));
  };

  const LoginChecker = () => {
    const userName = JSON.parse(localStorage.getItem("Login"));
    userName === null ? setError("Please Log In") : setIsLogged(true);
  };

  return (
    <div className="AuthForm">
      <h3>{Error}</h3>
      {isLogged === true ? (
        <table className="profile"></table>
      ) : (
        <form onSubmit={Submit}>
          <table className="AuthFormTbl">
            <tbody>
              <tr>
                <td>
                  <input
                    name="name"
                    placeholder="Login"
                    type="text"
                    onChange={(e) => setLogin(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-primary">Login</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};

export default Auth;
