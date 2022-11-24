import Loader from "react-loaders";
import "./index.scss";
import ProfilePic from "../../Assets/Images/profile_photo.png";
import CV from "../../Assets/CV/Tamas_Kovacs_Resume.pdf";

const About = () => {
  return (
    <>
      <section className="about-container">
        <article className="text_container">
          <h1>ABOUT ME</h1>
          <p>
            I am a self-taught, highly motivated front-end developer. I'm a good
            team player but I can work on my own, as well. In my free time I
            like reading and photography.
          </p>
          <p>
            I have experience with front-end development, mainly use ReactJS and
            JavaScript, but I'm eager and open to learn new technologies. 
          </p>
          <p>
            For more information visit my{" "}
            <a
              className="about_link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tamaskovacs0408/"
            >
              LinkedIn
            </a>{" "}
            profile, contact me via{" "}
            <a
              className="about_link"
              href="mailto:kovacs.tamas0408@gmail.com"
              rel="noreferrer"
            >
              email
            </a>
            , you can check out my projects on my{" "}
            <a
              className="about_link"
              href="https://github.com/tamaskovacs0408"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            profile, or you can download my{" "}
            <a className="about_link" href={CV} download>
              resume
            </a>
            .
          </p>
        </article>
        <article className="image_container">
          <img src={ProfilePic} alt="Profile" />
        </article>
      </section>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
