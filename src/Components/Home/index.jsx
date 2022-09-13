import "./index.scss";
import LogoTK from "../../Assets/Images/Tk_logo_svg.svg";
import Loader from "react-loaders";

const Home = () => {
  return (
    <>
      <section className="home__container">
        <article className="welcome_container">
          <h1 className="text-animate">
            Welcome,
            <br />
            my name is <br />
            <span id="monogram">T</span>amas <span id="monogram">K</span>ovacs!
          </h1>
          <span id="title">FRONTEND DEVELOPER</span>
        </article>
        <article className="logo_container">
          <img className="logo_tk" src={LogoTK} alt="logo" />
        </article>
      </section>
      <Loader type="ball-scale-ripple-multiple"/>
    </>
  );
};

export default Home;
