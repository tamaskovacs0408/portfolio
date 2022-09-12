import { useState } from "react";
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
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [showNavbar, setshowNavbar] = useState(false);

  const handleClick = () => {
    setshowNavbar(current => !current)
  }

  return (
    <section className="navbar__container">
      <article className="logo__container">
        <Link className="logo" to="/">
          <img src={LogoTK} alt="tk logo" />
          <img id="logo_sub" src={LogoTKsub} alt="tamas kovacs" />
        </Link>
      </article>
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
      <article className="contact__container">
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
      </article>
      <div className="hamburger_menu_icon">
        <FontAwesomeIcon onClick={handleClick} icon={faBars} />
      </div>
      <div className="mobile_navbar" style={{display: showNavbar ? 'block' : 'none'}}>
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
        <article className="contact__container">
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
          <div className="hamburger_menu_icon">
            <FontAwesomeIcon onClick={() => setshowNavbar(showNavbar === 'none')} icon={faArrowRight} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Navbar;
