import Auth from "../components/Auth/Auth";
import Navigation from "../components/Navigation/Navigation";
import { userName } from "../utils/login";
import "./pagesStyle.scss";

const Main = () => {
  return (
    <div className="mainPageContainer">
      {userName !== null ? (
        <div>
          <Navigation />
          <h1>Welcome Sir</h1>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default Main;
