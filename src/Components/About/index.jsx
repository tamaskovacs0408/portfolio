import Loader from "react-loaders";
import "./index.scss";
import ProfileImg from "../../Assets/Images/bg_photo.png";
import CV from "../../Assets/CV/tamas_kovacs_cv_en.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="text_container">
          <h1>ABOUT ME</h1>
          <p>
            I am a self-taught and highly motivated web developer who seeking to
            launch a career building web applications and services.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            suscipit unde debitis repudiandae dolorum possimus! Labore voluptate
            consequatur nostrum iure doloremque.
          </p>
          <p>
            For mor information visit my{" "}
            <a
              className="about_link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tamaskovacs0408/"
            >
              LinkedIn
            </a>{" "}
            profile and you can download my CV on this{" "}
            <a className="about_link" href={CV} download>
              link.
            </a>
          </p>
        </div>
        <div className="cube_container">
          <div className="cube">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#DD4B25" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#196DB1" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJs} color="#EAD41C" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSass} color="#C36291" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#4F9640" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
