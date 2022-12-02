import DetailTask from "../components/tasksList/DetailTask";
import "./pagesStyle.scss";

const taskList = () => {
  return (
    <div className="tasksDetail">
      <h1> Task Detail</h1>
      <DetailTask />
    </div>
  );
};

export default taskList;
