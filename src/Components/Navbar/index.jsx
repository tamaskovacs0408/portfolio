import { Link } from 'react-router-dom';
import './index.scss';
import LogoTK from '../../Assets/Images/tk_pic.png';
import LogoTKsub from '../../Assets/Images/tamkov.png';

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <Link className='logo' to ='/' >
        <img src={LogoTK} alt="tk logo" />
        <img id='logo_sub'  src={LogoTKsub} alt="tamas kovacs" />
      </Link>
    </div>
  )
}

export default Navbar;