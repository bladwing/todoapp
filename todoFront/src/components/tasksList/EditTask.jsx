import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getTask();

    function getTask() {
      axios.get(`https://ponarenkotodoapp.herokuapp.com/tasks/${id}`).then(function (response) {
        setInputs(response.data);
      });
    }
  }, [id]);
  const handleChange = async (e) => {
    const title = e.target.title;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [title]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`https://ponarenkotodoapp.herokuapp.com/tasks/${id}/edit`, inputs)
      .then(function () {
        navigate("/");
      });
  };
  return (
    <div>
        {inputs.title}
      <h1>Edit user</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Title: </label>
              </th>
              <td>
                <input
                  value={inputs.title}
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input
                  value={inputs.desription}
                  type="text"
                  name="desription"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input
                  value={inputs.status}
                  type="text"
                  name="mobile"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
