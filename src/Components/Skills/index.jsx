import "./index.scss";
import React from "react";
import Bootstrap from "../../Assets/Skill_icons/bootstrap-original-wordmark.svg";
import CSS from "../../Assets/Skill_icons/css3-original-wordmark.svg";
import Express from "../../Assets/Skill_icons/express-original-wordmark.svg";
import Firebase from "../../Assets/Skill_icons/firebase-plain-wordmark.svg";
import Git from "../../Assets/Skill_icons/git-original-wordmark.svg";
import Github from "../../Assets/Skill_icons/github.svg";
import HTML from "../../Assets/Skill_icons/html.svg";
import Js from "../../Assets/Skill_icons/js.svg";
import Mongo from "../../Assets/Skill_icons/mongo.svg";
import MUI from "../../Assets/Skill_icons/mui.svg";
import Next from "../../Assets/Skill_icons/next.svg";
import Node from "../../Assets/Skill_icons/node.svg";
import NPM from "../../Assets/Skill_icons/npm.svg";
import Python from "../../Assets/Skill_icons/python.svg";
import ReactLogo from "../../Assets/Skill_icons/react.svg";
import ReduxLogo from "../../Assets/Skill_icons/redux.svg";
import Sass from "../../Assets/Skill_icons/sass.svg";
import Styled from "../../Assets/Skill_icons/styled.svg";
import TS from "../../Assets/Skill_icons/ts.svg";

const Skills = () => {
  return (
    <section className="skills__container">
      <h1>SKILLS</h1>
      <div className="skill_logo_container">
        <div>
          <img src={Bootstrap} alt="skill logo" />
        </div>
        <div>
          <img src={CSS} alt="skill logo" />
        </div>

        <div>
          <img src={Express} alt="skill logo" className="colorize" />
        </div>

        <div>
          <img src={Firebase} alt="skill logo" />
        </div>

        <div>
          <img src={Git} alt="skill logo" />
        </div>

        <div>
          <img src={Github} alt="skill logo"/>
        </div>

        <div>
          <img src={HTML} alt="skill logo" />
        </div>

        <div>
          <img src={Js} alt="skill logo" />
        </div>

        <div>
          <img src={Mongo} alt="skill logo" />
        </div>

        <div>
          <img src={MUI} alt="skill logo" />
        </div>

        <div>
          <img src={Next} alt="skill logo" className="colorize" />
        </div>

        <div>
          <img src={Node} alt="skill logo" />
        </div>

        <div>
          <img src={NPM} alt="skill logo" />
        </div>

        <div>
          <img src={Python} alt="skill logo" />
        </div>

        <div>
          <img src={ReactLogo} alt="skill logo" />
        </div>

        <div>
          <img src={ReduxLogo} alt="skill logo" />
        </div>

        <div>
          <img src={Sass} alt="skill logo" />
        </div>

        <div>
          <img src={Styled} alt="skill logo" />
        </div>

        <div>
          <img src={TS} alt="skill logo" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
