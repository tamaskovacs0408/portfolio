import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './Components/About/index';
import Layout from './Components/Layout/index';
import Projects from './Components/Projects/index';
import Home from './Components/Home/index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
