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
            <img src="" alt="" />
          </div>
          <h2>Project name</h2>
          <p>Project description</p>
          <button>
            <a href="">Code</a>
          </button>
          <button>
            {" "}
            <a href="">Decmo</a>
          </button>
        </div>
        <div className="projects project_2">
          <div className="image_container">
            <img src="" alt="" />
          </div>
          <h2>Project name</h2>
          <p>Project description</p>
          <button>
            <a href="">Code</a>
          </button>
          <button>
            <a href="">Demo</a>
          </button>
        </div>
        <div className="projects project_3">
          <div className="image_container">
            <img src="" alt="" />
          </div>
          <h2>Project name</h2>
          <p>Project description</p>
          <button>
            <a href="">Code</a>
          </button>
          <button>
            <a href="">Demo</a>
          </button>
        </div>
        <div className="projects project_4">
          <div className="image_container">
            <img src="" alt="" />
          </div>
          <h2>Project name</h2>
          <p>Project description</p>
          <button>
            <a href="">Code</a>
          </button>
          <button>
            <a href="">Demo</a>
          </button>
        </div>
        </article>
      </section>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default Projects;
