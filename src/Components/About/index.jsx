import Loader from "react-loaders";
import "./index.scss";
import CV from "../../Assets/CV/tamas_kovacs_cv_en.pdf";
import ProfilePicture from "../../Assets/Images/profile_photo.png";

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
            have experience with front-end development, mainly use ReactJS and
            JavaScript, but I'm eager and open to learn new technologies. This
            summer I was attend the EPAM's Junior Front-end Program, where I
            gained a lot of experience with algorithms and problem solving by a
            ton of Codewars katas. I have some basic experience with Python and
            I would like to deepen my knowledge with it in the future.
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
            {/* <a className="about_link" href={CV} download>
              link
            </a> */}
            , or you can check out my projects on my{" "}
            <a
              className="about_link"
              href="https://github.com/tamaskovacs0408"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            profile.
          </p>
        </article>
        <article className="image_container">
          <img src={ProfilePicture} alt="Profile picture" />
        </article>
      </section>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
