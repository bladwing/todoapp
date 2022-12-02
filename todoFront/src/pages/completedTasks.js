import CompletedTask from "../components/tasksList/CompletedTask";
import Navigation from "../components/Navigation/Navigation";
import "./pagesStyle.scss";

const taskList = (props) => {
  return (
    <div className="tasksList">
      <Navigation/>
      <h1>Completed Tasks</h1>
      <CompletedTask Web={props.Web} />
    </div>
  );
};

export default taskList;
