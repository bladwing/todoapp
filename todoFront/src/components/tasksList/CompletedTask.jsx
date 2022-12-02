import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../utils/requests";
import { Link } from "react-router-dom";

export default function CompletedTasks() {
  const [tasks, setTasks] = useState([]);


  const name = ["status"];
  const value = "";
  const [status] = useState((values) => ({ ...values, [name]: value }));

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    await axios.get(api + "/tasks").then((response) => {
      setTasks(response.data);
    });
  };

  const UpdateStatus = (id) => {
    axios.patch(api + `/tasks/${id}`, status).then(() => {
      getTasks();
    });
  };

  const ComplatedTask = tasks.filter((task) => task.status === "Done");

  return (
    <div>
      <table cellPadding={20} className="table">
        <thead>
          <tr className="Labels">
            <th>Un-Done</th>
            <th style={{ width: "2%" }}>#</th>
            <th style={{ width: "24%" }}>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {ComplatedTask.map((task, key) => (
          <tbody key={key} className="taskItem">
       
            <tr>
              <td><input type="checkbox" onChange={() => UpdateStatus(task.id)}/></td>
              <td>{task.id}</td>
              <td>
                <Link to={`task/${task.id}`}>
                  <h6
                    style={{
                      textDecoration: "line-through",
                      textDecorationColor: "red",
                    }}
                  >
                    {task.title}
                  </h6>
                </Link>
              </td>
              <td>{task.status}</td>

              <td className="actionButtonContainer">
                <button
                  // onClick={() => deleteTask(task.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
