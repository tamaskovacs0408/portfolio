import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
  return (
    <section className='App'>
      <Navbar />
      <div className="page__container">
        <Outlet />
      </div>
    </section>
  )
}

export default Layout;