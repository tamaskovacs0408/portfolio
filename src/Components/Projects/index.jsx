import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";
import Project1Img from '../../Assets/Images/shoplist_img.png';
import Project2Img from '../../Assets/Images/color_project.jpeg';
import Project3Img from '../../Assets/Images/crypto_project.png';
import Project4Img from '../../Assets/Images/recipe_project.png';
import "./index.scss";

const Projects = () => {
  return (
    <>
      <section className="projects__container">
        <h1>MY PROJECTS</h1>
        <article className="inner_container">
          <div className="projects project_1">
            <div className="image_container">
              <img src={Project1Img} alt="Shoplist project screenshot" />
            </div>
            <h2>Shopping list</h2>
            <p>With this responsive React app you can add, update and delete elements to/from your shopping list.</p>
            <div className="link_container">
              <a className="link_icon" href="https://github.com/tamaskovacs0408/shopping-list" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a className="link_icon" href="https://tamaskovacs0408.github.io/shopping-list/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_2">
            <div className="image_container">
              <img src={Project2Img} alt="Color project screenshot" />
            </div>
            <h2>Tint and shade generator</h2>
            <p>With this React app you can generate the color scale of your  HEX color. It generates 10 'light' shades, and 10 'dark' shades.</p>
            <div className="link_container">
              <a className="link_icon" href="https://github.com/tamaskovacs0408/color-generator" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a className="link_icon" href="https://tamaskovacs0408.github.io/color-generator/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_3">
            <div className="image_container">
              <img src={Project3Img} alt="Crypto project creenshot" />
            </div>
            <h2>Get current price</h2>
            <p>With this simple, responsive React app you can get the current price of the given cryptocurrencies with the Binance API.</p>
            <div className="link_container">
              <a className="link_icon" href="https://github.com/tamaskovacs0408/crypto_fav" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a className="link_icon" href="https://tamaskovacs0408.github.io/crypto_fav/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faWindowMaximize} />
              </a>
            </div>
          </div>
          <div className="projects project_4">
            <div className="image_container">
              <img src={Project4Img} alt="Recipe project screenshot" />
            </div>
            <h2>Recipe finder</h2>
            <p>With this responsive site you can find multiple recipes from around the world. The site is using TheMealDB API.</p>
            <div className="link_container">
              <a className="link_icon" href="https://github.com/tamaskovacs0408/recipes_project" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faCode} />
              </a>
              <a className="link_icon" href="https://tamaskovacs0408.github.io/recipes_project/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faWindowMaximize} />
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
