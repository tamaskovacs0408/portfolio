import Loader from "react-loaders";
import "./index.scss";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1>ABOUT</h1>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
