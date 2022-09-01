import Loader from "react-loaders";
import "./index.scss";
import ProfileImg from '../../Assets/Images/bg_photo.png'

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="text_container">
          <h1>ABOUT ME</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo amet cumque consectetur accusamus voluptatibus iusto rerum quis illum tenetur odio accusantium corporis quia quisquam impedit error aut molestiae soluta maxime dolore esse, repellat voluptatum minima adipisci. Neque earum repellat reiciendis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit unde debitis repudiandae dolorum possimus! Labore voluptate consequatur nostrum iure doloremque, voluptatibus fuga cumque error temporibus ab quaerat eos. Sit ea molestias velit cupiditate totam iure culpa repudiandae eveniet porro!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, officiis inventore recusandae sequi facere dolor aut vitae vero provident rerum iure architecto mollitia voluptatibus aliquid reprehenderit veritatis sed tempore voluptas officia itaque, adipisci ab doloribus nobis ad. Laudantium, ducimus officia!</p>
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
