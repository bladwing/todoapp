import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/requests";

import "./tasks.scss";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const name = ["status"];
  const value = "Done";
  const [status] = useState((values) => ({ ...values, [name]: value }));

  useEffect(() => {
    getTasks()
  }, []);

  const getTasks = async () => {
    await axios.get(api + "/tasks").then((response) => {
      setTasks(response.data);
    });
  };

  const deleteTask = async (id) => {
    await axios.delete(api + `/tasks/deleteById/${id}`).then(() => {
      setMessage("Task Deleted Successful") || getTasks();
      setTimeout(() => {
        setMessage("");
      }, 2000);
    });
  };

  const TaskFilter = tasks.filter((task) => task.status !== "Done");

  const UpdateStatus = (id) => {
    setIsChecked(false) || getTasks();
    axios.patch(api + `/tasks/${id}`, status).then(() => {
      getTasks();
    });
  };

  return (
    <div>
      <div style={{ height: "50px", fontSize: "20px", fontWeight: "700" }}>
        {message}
      </div>
      <table cellPadding={20} className="table">
        <thead>
          <tr className="Labels">
            <th></th>
            <th style={{ width: "2%" }}>#</th>
            <th style={{ width: "30%" }}>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <thead>
          {TaskFilter.map((task, key) => (
            <tr key={key} className="taskItem">
              <td>
                <input type="checkbox" onChange={() => UpdateStatus(task.id)} defaultChecked={false} />
              </td>
              <td>{task.id}</td>
              <td>
                <Link to={`task/${task.id}`}>
                  <h6>{task.title}</h6>
                </Link>
              </td>
              <td>{task.status}</td>

              <td className="actionButtonContainer">
                <button
                  onClick={() => deleteTask(task.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
