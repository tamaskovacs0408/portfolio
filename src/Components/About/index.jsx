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
            Although I'm a beginner, I have experience with the following
            programming languages and frameworks: HTML5, CSS3, Sass, JavaScript
            and React.
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
              link
            </a>
            , or you can check out my projects on my{" "}
            <a
              className="about_link"
              href="https://github.com/tamaskovacs0408"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            profile.
          </p>
        </div>
        <div className="cube_container">
          <div className="cube_inner">
            <div className="cube">
              <div className="face1">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJs} />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faSass} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
