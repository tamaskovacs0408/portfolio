import Loader from "react-loaders";
import "./index.scss";
import ProfileImg from '../../Assets/Images/bg_photo.png'

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="text_container">
          <h1>ABOUT ME</h1>
          <p>I am a self-taught and highly motivated web developer who seeking to launch a career building web applications and services.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit unde debitis repudiandae dolorum possimus! Labore voluptate consequatur nostrum iure doloremque.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, officiis inventore recusandae sequi facere dolor aut vitae vero provident rerum.</p>
        </div>
        <div className="image_container">
          <img src={ProfileImg} alt="me" />
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
