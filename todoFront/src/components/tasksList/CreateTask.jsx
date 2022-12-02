import { useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../utils/requests";

export default function CreateTask() {
  const navigate = useNavigate();
  const form = useRef(null);
  const [inputs, setInputs] = useState([]);

  const handleChange = (e) => {
    const title = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [title]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(api + "/tasks", inputs).then(function () {
      setInputs("");
      navigate("/tasks");
    });
  };
  return (
    <div>
      <div className="createTasks">
        <form onSubmit={handleSubmit} ref={form}>
          <h2>Create Task's</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    placeholder={"Task Title"}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
              </tr>
              <tr>
                <td>
                  <textarea
                    type="text"
                    name="description"
                    onChange={handleChange}
                    placeholder={"Task Description"}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr className="createTaskButtonContainer">
                <td>
                  <button className="btn btn-outline-success">Save</button>
                </td>
                <td>
                  <Link to={"/tasks"} className="btn btn-outline-success">
                    Cancel
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
