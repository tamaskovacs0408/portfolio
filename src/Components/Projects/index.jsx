import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";
import "./index.scss";

const Projects = () => {
  return (
    <>
      <section className="projects__container">
        <h1>MY PROJECTS</h1>
        <article className="inner_container">
          <div className="projects project_1">
            <div className="image_container">
              <div id="project_1"></div>
            </div>
            <h2>Shopping list</h2>
            <div className="link_container">
              <a
                className="link_icon"
                href="https://github.com/tamaskovacs0408/shopping-list"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                className="link_icon"
                href="https://tamaskovacs0408.github.io/shopping-list/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_2">
            <div className="image_container">
              <div id="project_2"></div>
            </div>
            <h2>Tint and shade generator</h2>
            <div className="link_container">
              <a
                className="link_icon"
                href="https://github.com/tamaskovacs0408/color-generator"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                className="link_icon"
                href="https://tamaskovacs0408.github.io/color-generator/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_3">
            <div className="image_container project_3">
              <div id="project_3"></div>
            </div>
            <h2>Hodler Checker</h2>
            <div className="link_container">
              <a
                className="link_icon"
                href="https://github.com/tamaskovacs0408/crypto_app"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                className="link_icon"
                href="https://hodler-checker.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_4">
            <div className="image_container project_4">
              <div id="project_4"></div>
            </div>
            <h2>Recipe finder</h2>
            <div className="link_container">
              <a
                className="link_icon"
                href="https://github.com/tamaskovacs0408/recipes_project"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                className="link_icon"
                href="https://tamaskovacs0408.github.io/recipes_project/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_5">
            <div className="image_container">
              <div id="project_5"></div>
            </div>
            <h2>Docs</h2>
            <div className="link_container">
              <a
                className="link_icon"
                href="https://github.com/tamaskovacs0408/docs_app"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                className="link_icon"
                href="https://docs-app-woad.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_6">
            <div className="image_container">
              <div id="project_6"></div>
            </div>
            <h2>Weather App</h2>
            <div className="link_container">
              <a
                className="link_icon"
                href="https://github.com/tamaskovacs0408/weather_app"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                className="link_icon"
                href="https://tamaskovacs0408.github.io/weather_app/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_7">
            <div className="image_container">
              <div id="project_7"></div>
            </div>
            <h2>BMI Calculator</h2>
            <div className="link_container">
              <a
                className="link_icon"
                href="https://github.com/tamaskovacs0408/bmi_ts"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                className="link_icon"
                href="https://tamaskovacs0408.github.io/bmi_ts/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_8">
            <div className="image_container">
              <div id="project_8"></div>
            </div>
            <h2>TKoin Blockchain</h2>
            <div className="link_container">
              <a
                className="link_icon"
                href="https://github.com/tamaskovacs0408/TKoin"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
            </div>
          </div>
        </article>
      </section>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default Projects;
