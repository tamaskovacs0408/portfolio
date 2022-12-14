import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoTK from "../../Assets/Images/Tk_logo_alt2.png";
import LogoTKsub from "../../Assets/Images/tamkov.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEye,
  faAt,
  faGear,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [showNavbar, setshowNavbar] = useState(false);

  return (
    <section className="navbar__container">
      <article className="logo__container">
        <Link className="logo" to="/">
          <img src={LogoTK} alt="tk logo" />
          <img id="logo_sub" src={LogoTKsub} alt="tamas kovacs" />
        </Link>
      </article>
      <nav className={showNavbar ? "navbar-visible" : ""}>
        <FontAwesomeIcon
          onClick={() => setshowNavbar(false)}
          className="close"
          icon={faXmark}
        />
        <article className="link_container">
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setshowNavbar(false)}
          >
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setshowNavbar(false)}
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="skills-link"
            to="/skills"
            onClick={() => setshowNavbar(false)}
          >
            <FontAwesomeIcon icon={faGear} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="projects-link"
            to="/projects"
            onClick={() => setshowNavbar(false)}
          >
            <FontAwesomeIcon icon={faEye} />
          </NavLink>
        </article>
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
      </nav>

      <div className="hamburger_menu_icon">
        <FontAwesomeIcon onClick={() => setshowNavbar(true)} icon={faBars} />
      </div>
    </section>
  );
};

export default Navbar;
