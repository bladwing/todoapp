import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../utils/requests";

import ElementMaker from "./ElementMaker";

export default function TaskDetail() {
  const [showInputEle, setShowInputEle] = useState(false);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const [tasks, setTasks] = useState("");
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    getProductById();
    async function getProductById() {
      const response = await axios.get(api + `/tasks/${id}`);
      setTasks(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
    }
  }, [id]);

  const StatusUpdate = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    await axios.patch(api + `/tasks/${id}`, { [name]: value }).then(() => {
      setMessage("Status Update Successful");
    });
  };

  const StatusChange = async (e) => {
    e.preventDefault();
    await axios
      .patch(api + `/tasks/${id}`, {
        title: title,
        description: description,
      })
      .then(() => {
        setMessage("Update Successful");
      });
  };
  return (
    <div className="detailTaskContainer">
      {message}
      <table cellPadding={20}>
        <tbody>
          <tr>
            <th>Title</th>
            <td>
              <ElementMaker
                value={title}
                handleChange={(e) => setTitle(e.target.value)}
                handleDoubleClick={() => setShowInputEle(true)}
                handleBlur={() => setShowInputEle(false)}
                showInputEle={showInputEle}
              />
            </td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{description}</td>
          </tr>
          <tr>
            <td>
              <form onSubmit={StatusChange}>
                <ul className="editDetailSelect">
                  <li>
                    <label>Status</label>
                    <select name="status" id="" onChange={StatusUpdate}>
                      <option value="">{tasks.status}</option>
                      <option value="Done">Done</option>
                      <option value="In progress">In Progress</option>
                    </select>
                  </li>
                </ul>

                <div className="buttonContainerDetail">
                  <button className="btn btn-primary ">Save</button>
                  <Link className="btn btn-primary" to={`/tasks`}>
                    Cancel
                  </Link>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
