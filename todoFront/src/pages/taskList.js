import TaskList from "../components/tasksList/Tasks";
import Navigation from "../components/Navigation/Navigation";
import "./pagesStyle.scss";

const taskList = () => {
  return (
    <div className="tasksList">
      <Navigation/>
      <TaskList />
    </div>
  );
};

export default taskList;
