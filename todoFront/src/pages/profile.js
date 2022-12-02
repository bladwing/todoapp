import Auth from "../components/Auth/Auth";
import Navigation from "../components/Navigation/Navigation";
import "./pagesStyle.scss"


const Main = () => {
  return (
    <div className="mainPageContainer">
        <Navigation/>
      <h1>Welcome Sir</h1>
      <Auth/>
    
    </div>
  );
};

export default Main;