import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoTK from "../../Assets/Images/tk_pic.png";
import LogoTKsub from "../../Assets/Images/tamkov.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEye,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="logo__container">
        <Link className="logo" to="/">
          <img src={LogoTK} alt="tk logo" />
          <img id="logo_sub" src={LogoTKsub} alt="tamas kovacs" />
        </Link>
      </div>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faEye} />
        </NavLink>
      </nav>
      <div className="contact__container">
        <ul>
          <li>
            <a href="mailto:kovacs.tamas0408@gmail.com" rel="noreferrer">
              <FontAwesomeIcon icon={faAt} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tamaskovacs0408/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} color="#FFFFFF" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tamaskovacs0408"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
