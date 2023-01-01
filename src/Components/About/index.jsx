import Loader from "react-loaders";
import { NavLink } from "react-router-dom";
import "./index.scss";
import CV from "../../Assets/CV/Tamas_Kovacs_Resume.pdf";

const About = () => {
  return (
    <>
      <section className="about-container">
        <article className="text_container">
          <h1>ABOUT ME</h1>
          <p>
            I'm a Junior Web Developer mainly focused on frond-end development.<br/>
            Mostly using React, but I'm completely open to other tech stacks as
            well.
            <br />
            You can see my full tech stack on the{" "}
            <NavLink className="about_link" to="/skills">
              Skills
            </NavLink>{" "}
            page.
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
      </section>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default About;
