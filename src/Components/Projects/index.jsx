import Loader from 'react-loaders';
import './index.scss';

const Projects = () => {
  return (
    <>
      <div className='projects__container'>
          <h1>MY PROJECTS</h1>
          <div className='projects'>
            
          </div>
      </div>
      <Loader type="ball-scale-ripple-multiple"/>
    </>
  )
}

export default Projects;