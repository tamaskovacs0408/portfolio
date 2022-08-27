import "./index.scss";
import LogoTK from "../../Assets/Images/tk_svg.svg";

const Home = () => {
  return (
    <div className="home__container">
      <div className="welcome">
        <h1>
          Welcome,
          <br />
          my name is <br />
          <span id="letter_T">T</span>amas!
        </h1>
        <span id="title">FRONTEND DEVELOPER</span>
      </div>
      <div className="logo_container">
        <img className="logo_tk" src={LogoTK} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
