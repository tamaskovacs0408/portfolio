import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="page__container">
        <Outlet />
      </div>
    </>
  )
}

export default Layout;