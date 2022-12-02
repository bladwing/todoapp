import { Link, useNavigate } from "react-router-dom";
import { LogOut, userName } from "../../utils/login";
import "./nav.scss";

const Navigation = () => {
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/") || window.location.reload() || LogOut();
  };

  return (
    <nav className="navigation">
      {userName === null ? (
        ""
      ) : (
        <ul>
          <li>
            <Link to="/tasks" className="btn btn-primary dropbtn">
              Task List
            </Link>

            <ul className="subMenu">
              <li>
                <Link to={"/createtasks"} className="btn btn-success">
                  Create Task
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/completedtasks"} className="btn btn-primary dropbtn">
              Complated Task
            </Link>
          </li>
          <li>
            <button
              className="btn btn-danger logOut"
              onClick={() => {
                Logout();
              }}
            >
              Log Out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
