import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';

const Layout = () => {
  return (
    <main className='App'>
      <Navbar />
      <div className="page__container">
        <Outlet />
      </div>
    </main>
  )
}

export default Layout;