import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoTK from "../../Assets/Images/tk_pic.png";
import LogoTKsub from "../../Assets/Images/tamkov.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEye } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <Link className="logo" to="/">
        <img src={LogoTK} alt="tk logo" />
        <img id="logo_sub" src={LogoTKsub} alt="tamas kovacs" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className='projects-link' to="/projects">
          <FontAwesomeIcon icon={faEye} color='#FFFFFF'/>
        </NavLink>
      </nav>
      
    </div>
  );
};

export default Navbar;
