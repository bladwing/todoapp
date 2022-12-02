import { Routes, Route } from "react-router-dom";
import "./App.scss";

import CreateTask from "./components/tasksList/CreateTask";
import Tasks from "./pages/taskList";
import DetailTask from "./pages/detailTask";
import Main from "./pages/main";
import CompletedTasks from "./pages/completedTasks";


const userName = JSON.parse(localStorage.getItem("Login"));

function App() {
  return (
    <div className="App">
      <Routes>
        {userName === null ? (
           <Route path="/*" element={<Main />} />
        ) : (
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/createtasks" element={<CreateTask />} />
            <Route path="/tasks/task/:id/" element={<DetailTask />} />
            <Route path="/completedtasks" element={<CompletedTasks />} />
            <Route path="/completedtasks/task/:id/" element={<DetailTask />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}
export default App;
