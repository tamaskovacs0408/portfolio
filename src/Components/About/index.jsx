import Loader from "react-loaders";
import "./index.scss";
import CV from "../../Assets/CV/tamas_kovacs_cv_en.pdf";


const About = () => {
  return (
    <>
      <section className="about-container">
        <article className="text_container">
          <h1>ABOUT ME</h1>
          <p>
            I am a self-taught and highly motivated web developer who seeking to
            launch a career building web applications and services.
          </p>
          <p>
            Although I'm a beginner, I have experience with the following
            programming languages and frameworks: HTML5, CSS3, Sass, JavaScript
            and React.
          </p>
          <p>
            For mor information visit my{" "}
            <a
              className="about_link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tamaskovacs0408/"
            >
              LinkedIn
            </a>{" "}
            profile and you can download my CV on this{" "}
            <a className="about_link" href={CV} download>
              link
            </a>
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
      </section>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
